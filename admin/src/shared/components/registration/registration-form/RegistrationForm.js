import {RegistrationComponent} from '@core/authorization/RegistrationComponent'
import {createRegisterFormTemplate} from '@shared/templates/authorization/registration.template'
import {Form} from '@core/form/Form'
import {Validators} from '@core/form/Validators'
import {AuthorizationAPI} from '@shared/services/Authorization.service'
import {ActiveRoute} from '@core/routing/ActiveRoute'

export class RegistrationForm extends RegistrationComponent {
    static className = 'registration__form'

    constructor($root) {
        super($root, {
            name: 'RegistrationForm',
            listeners: ['submit']
        })
    }

    toHTML() {
        return createRegisterFormTemplate()
    }

    init() {
        super.init()
        this.$form = this.$root.find('#registration-form', true)
        this.form = new Form(this.$form, {
            username: [Validators.required],
            email: [Validators.required, Validators.email],
            password: [Validators.minLength(6)],
            key: [Validators.required]
        })
    }

    async onSubmit(event) {
        event.preventDefault()
        if (this.form.isValid()) {
            const formData = {
                ...this.form.value()
            }

            await AuthorizationAPI.registration(formData).then(response => {
                if (response.status) {
                    alert(response.message)
                    this.form.clear()
                    ActiveRoute.navigate('login')
                } else {
                    alert(response.message)
                }
            })
        }
    }
}
