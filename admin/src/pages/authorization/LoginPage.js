import {Page} from '@core/page/Page'
import {Login} from '@shared/components/login/Login'
import {Header} from '@shared/components/header/Header'
import {LoginForm} from '@shared/components/login/login-form/LoginForm'

export class LoginPage extends Page {
    getRoot() {
        this.login = new Login({
            components: [Header, LoginForm]
        })

        return this.login.getRoot()
    }

    afterRender() {
        this.login.init()
    }

    destroy() {
        this.login.destroy()
    }
}