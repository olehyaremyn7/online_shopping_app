import {Page} from '@shared/classes/Page'
import {Add} from '@shared/components/add/Add'
import {Header} from '@shared/components/header/Header'
import {AddForm} from '@shared/components/add/add-form/AddForm'

export class AddPage extends Page {
    getRoot() {
        this.add = new Add({
            components: [Header, AddForm]
        })

        return this.add.getRoot()
    }

    afterRender() {
        this.add.init()
    }

    destroy() {
        this.add.destroy()
    }
}
