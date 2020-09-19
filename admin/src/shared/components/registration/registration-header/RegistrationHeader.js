import {RegistrationComponent} from '@core/authorization/RegistrationComponent'
import {createRegisterHeaderTemplate} from '@shared/templates/registration.template'

export class RegistrationHeader extends RegistrationComponent {
    static className = 'auth__header'

    constructor($root) {
        super($root, {
            name: 'RegistrationHeader',
            listeners: []
        })
    }

    toHTML() {
        return createRegisterHeaderTemplate()
    }
}