import {Page} from '@core/page/Page'
import {Registration} from '@shared/components/registration/Registration'
import {Header} from '@shared/components/header/Header'
import {RegistrationForm} from '@shared/components/registration/registration-form/RegistrationForm'

export class RegistrationPage extends Page {
    getRoot() {
        this.registration = new Registration({
            components: [Header, RegistrationForm]
        })

        return this.registration.getRoot()
    }

    afterRender() {
        this.registration.init()
    }

    destroy() {
        this.registration.destroy()
    }
}