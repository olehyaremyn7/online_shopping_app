import {EditComponent} from '@core/main/EditComponent'
import {createEditFormTemplate} from '@shared/templates/main/edit.template'
import {Form} from '@core/form/Form'
import {Validators} from '@core/form/Validators'
import {ProductAPI} from '@shared/services/Product.service'
import {ActiveRoute} from '@core/routing/ActiveRoute'

export class EditForm extends EditComponent {
    static className = 'update__form'

    constructor($root) {
        super($root, {
            name: 'EditForm',
            listeners: ['submit']
        })
    }

    toHTML() {
        return createEditFormTemplate()
    }

    init() {
        super.init()
        this.$form = this.$root.find('#update-form', true)
        this.form = new Form(this.$form, {
            title: [Validators.required],
            category: [Validators.required],
            price: [Validators.required, Validators.minLength(1)],
            description: [Validators.required, Validators.minLength(10)]
        })
        const fetchData = JSON.parse(localStorage.getItem('item'))
        localStorage.setItem('item', null)
        this.form.setValue(fetchData)
    }

    async onSubmit(event) {
        event.preventDefault()
        if (this.form.isValid()) {
            const image = document.getElementById('image').files[0]

            const product = {
                ...this.form.value(),
                image
            }

            await ProductAPI.update(ActiveRoute.param, product).then(response => {
                this.form.clear()
                alert(response.message)
                ActiveRoute.navigate('items')
            })
        }
    }
}
