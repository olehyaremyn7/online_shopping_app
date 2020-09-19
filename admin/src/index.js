import './stylesheets/scss/index.scss'
import {Registration} from '@shared/components/registration/Registration'
import {RegistrationHeader} from '@shared/components/registration/registration-header/RegistrationHeader'
import {RegistrationForm} from '@shared/components/registration/registration-form/RegistrationForm'

const registration = new Registration('#app', {
    components: [RegistrationHeader, RegistrationForm]
})

registration.render()
