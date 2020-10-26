export function createStartTemplate() {
    const introText = 'to the administration page where ' +
        'you can monitor the operation of the online store'
    const tipsText = 'To get started, you need to ' +
        'log in or register a new administrator'
    return `
        <div class="start__block">
            <div class="start__brand">
                <h1>Aligator Store</h1>
            </div>

            <div class="start__module">
                 <h2>Administration</h2>
            </div>

            <div class="start__text">
                 <p class="intro"><strong>Welcome</strong>
                    ${introText} <strong>Aligator Store</strong> </p>
                 <p class="tips">${tipsText}</p>
            </div>

            <hr>

            <div class="start__buttons">
                 <a class="button" href="#login">Login</a>
                 <a class="button" href="#registration">Registration</a>
            </div>
        </div>
    `
}