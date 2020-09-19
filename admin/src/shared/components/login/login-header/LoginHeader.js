import {LoginComponent} from '@core/authorization/LoginComponent'
import {createLoginHeaderTemplate} from '@shared/templates/login.template'


export class LoginHeader extends LoginComponent {
    static className = 'auth__header'

    constructor($root) {
        super($root, {
            name: 'LoginHeader',
            listeners: []
        })
    }

    toHTML() {
        return createLoginHeaderTemplate()
    }
}