import {LoginComponent} from '@core/authorization/LoginComponent'
import {createLoginFormTemplate} from '@shared/templates/authorization/login.template'
import {Form} from '@core/form/Form'
import {Validators} from '@core/form/Validators'
import {AuthorizationAPI} from '@shared/services/Authorization.service'
import {ActiveRoute} from '@core/routing/ActiveRoute'

export class LoginForm extends LoginComponent {
    static className = 'login__form'

    constructor($root) {
        super($root, {
            name: 'LoginForm',
            listeners: ['submit']
        })
    }

    toHTML() {
        return createLoginFormTemplate()
    }

    init() {
        super.init()
        this.$form = this.$root.find('#login-form', true)
        this.form = new Form(this.$form, {
            email: [Validators.required, Validators.email],
            password: [Validators.minLength(6)]
        })
    }

    async onSubmit(event) {
        event.preventDefault()
        if (this.form.isValid()) {
            const formData = {
                ...this.form.value()
            }

            await AuthorizationAPI.login(formData).then(response => {
                if (response.status) {
                    this.form.clear()
                    ActiveRoute.navigate('dashboard')
                } else {
                    alert(response.message)
                }
            })
        }
    }
}
