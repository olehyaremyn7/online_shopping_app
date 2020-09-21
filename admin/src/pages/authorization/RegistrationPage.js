import {Page} from '@core/page/Page'
import {Registration} from '@shared/components/registration/Registration'
import {RegistrationHeader} from '@shared/components/registration/registration-header/RegistrationHeader'
import {RegistrationForm} from '@shared/components/registration/registration-form/RegistrationForm'

export class RegistrationPage extends Page {
    getRoot() {
        this.registration = new Registration({
            components: [RegistrationHeader, RegistrationForm]
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