import {LoginComponent} from '@core/authorization/LoginComponent'
import {createLoginFormTemplate} from '@shared/templates/login.template'

export class LoginForm extends LoginComponent {
    static className = 'login__form'

    constructor($root) {
        super($root, {
            name: 'LoginForm',
            listeners: []
        })
    }

    toHTML() {
        return createLoginFormTemplate()
    }
}