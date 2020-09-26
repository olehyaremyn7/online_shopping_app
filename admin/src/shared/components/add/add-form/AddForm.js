import {AddComponent} from '@core/main/AddComponent'
import {createAddFormTemplate} from '@shared/templates/add.template'
import {Form} from '@core/form/Form'
import {Validators} from '@core/form/Validators'
import {ProductAPI} from '@shared/services/Product.service'

export class AddForm extends AddComponent {
    static className = 'add__form'

    constructor($root) {
        super($root, {
            name: 'AddForm',
            listeners: ['submit']
        })
    }

    toHTML() {
        return createAddFormTemplate()
    }

    init() {
        super.init()
        this.$form = this.$root.find('#add-form', true)
        this.form = new Form(this.$form, {
            title: [Validators.required],
            category: [Validators.required],
            price: [Validators.required, Validators.minLength(1)],
            description: [Validators.required, Validators.minLength(10)]
        })
    }

    async onSubmit(event) {
        event.preventDefault()
        if (this.form.isValid()) {
            const image = document.getElementById('image').files[0]

            const product = {
                ...this.form.value(),
                image
            }

            await ProductAPI.create(product).then(response => {
                if (response.status) {
                    this.form.clear()
                    alert(response.message)
                } else {
                    response.message
                }
            })
        }
    }
}