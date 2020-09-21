class AuthorizationService {
    constructor(AuthUrl) {
        this.token = null;
        this.url = AuthUrl
    }

    async registration(admin) {
        try {
            const request = new Request(`${this.url}/registration`, {
                method: 'POST',
                body: JSON.stringify(admin),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            return useRequest(request)
        } catch (e) {
            alert('Error:' + e)
        }
    }

    async login(admin) {
        try {
            const request = new Request(`${this.url}/login`, {
                method: 'POST',
                body: JSON.stringify(admin),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            return useRequest(request).then(data => {
                const token = data.token
                localStorage.setItem('secret-auth-token', token)
                this.setToken(token)
                return {
                    status: data.status,
                    message: data.message
                }
            })
        } catch (e) {
            alert('Error:' + e)
        }
    }

    isAuthenticated() {
        return !!this.token;
    }

    logout() {
        this.setToken(null);
        localStorage.clear();
    }

    getToken() {
        return this.token;
    }

    setToken(token) {
        this.token = token;
    }
}

async function useRequest(request) {
    const response = await fetch(request)
    if (response.ok) {
        const json = await response.json()
        return {
            status: response.ok,
            ...json
        }
    } else {
        return await response.json()
    }
}

export const AuthorizationAPI = new AuthorizationService('/api/admin/authorization')