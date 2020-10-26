import {tokenInterceptor} from '@shared/classes/token.interceptor'

class DashboardService {
    constructor(DashboardUrl) {
        this.url = DashboardUrl
    }

    async fetch() {
        try {
            const request = new Request(`${this.url}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    ...tokenInterceptor.intercept()
                }
            })

            return useRequest(request)
        } catch (e) {
            alert('Error:' + e)
        }
    }
}

async function useRequest(request) {
    const response = await fetch(request)
    return await response.json()
}

export const DashboardAPI = new DashboardService('/api/admin/dashboard')
