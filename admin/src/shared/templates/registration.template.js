export function createRegisterHeaderTemplate() {
    return `
        <h1>Aligator Store Administration</h1>
        <div class="links">
            <a class="button" href="#">Login</a>
            <a class="button" href="#">Registration</a>
        </div>
    `
}

export function createRegisterFormTemplate() {
    return `
        <h1>Registration</h1>
        <form id="registration-form">
            <div class="form-control">
                <label for="name">Name</label>
                <input class="name" 
                       type="text" 
                       id="name"
                       name="name">
            </div>

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

            <div class="form-control">
                <label for="key">Key</label>
                <input class="key" 
                       type="password" 
                       id="key"
                       name="key">
            </div>

            <button class="button" type="submit">Sign up</button>
        </form>
    `
}