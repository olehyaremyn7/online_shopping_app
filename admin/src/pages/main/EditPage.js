import {Page} from '@shared/classes/Page'
import {Edit} from '@shared/components/edit/Edit'
import {Header} from '@shared/components/header/Header'
import {EditForm} from '@shared/components/edit/edit-form/EditForm'
import {ProductAPI} from '@shared/services/Product.service'
import {Processor} from '@shared/classes/DIP/Processor.interface'
import {Client} from '@shared/classes/DIP/Client.interface'
import {ActiveRoute} from '@core/routing/ActiveRoute'

export class EditPage extends Page {
    constructor() {
        super()
        this.processor = new Processor(
            new Client(ProductAPI)
        )
    }

    async getRoot() {
        const item = await this.processor.getById(ActiveRoute.param)
        localStorage.setItem('item', JSON.stringify(item))

        this.edit = new Edit({
            components: [Header, EditForm]
        })

        return this.edit.getRoot()
    }

    afterRender() {
        this.edit.init()
    }

    destroy() {
        this.edit.destroy()
    }
}
