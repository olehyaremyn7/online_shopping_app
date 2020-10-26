import {Page} from '@shared/classes/Page'
import {Items} from '@shared/components/items/Items'
import {Header} from '@shared/components/header/Header'
import {ItemCard} from '@shared/components/items/item-card/ItemCard'
import {ProductAPI} from '@shared/services/Product.service'
import {Processor} from '@shared/classes/DIP/Processor.interface'
import {Client} from '@shared/classes/DIP/Client.interface'

export class ItemsPage extends Page {
    constructor() {
        super()
        this.processor = new Processor(
            new Client(ProductAPI)
        )
    }

    async getRoot() {
        const data = await this.processor.get()
        localStorage.setItem('products', JSON.stringify(data))

        this.items = new Items({
            components: [Header, ItemCard]
        })

        return this.items.getRoot()
    }

    afterRender() {
        this.items.init()
    }

    destroy() {
        this.items.destroy()
    }
}
