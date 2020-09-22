export function createLoginFormTemplate() {
    return `
        <h1>Login</h1>
        <form id="login-form">
            <div class="form-control">
                <label for="email">Email</label>
                <input class="email" 
                       type="email" 
                       id="email" 
                       name="email">
            </div>

            <div class="form-control">
                <label for="password">Password</label>
                <input class="password" 
                       type="password" 
                       id="password" 
                       name="password">
            </div>

            <button class="button" type="submit">Sign in</button>
        </form>
    `
}