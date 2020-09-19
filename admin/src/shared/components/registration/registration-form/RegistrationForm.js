import {RegistrationComponent} from '@core/authorization/RegistrationComponent'
import {createRegisterFormTemplate} from '@shared/templates/registration.template'

export class RegistrationForm extends RegistrationComponent {
    static className = 'registration__form'

    constructor($root) {
        super($root, {
            name: 'RegistrationForm',
            listeners: []
        })
    }

    toHTML() {
        return createRegisterFormTemplate()
    }
}