import {ItemsComponent} from '@core/main/ItemsComponent'
import {createCardTemplate} from '@shared/templates/main/items.template'
import {$} from '@core/DOM/DOM'
import {ProductAPI} from '@shared/services/Product.service'
import {ActiveRoute} from '@core/routing/ActiveRoute'

export class ItemCard extends ItemsComponent {
    static className = 'items__cards'

    constructor($root) {
        super($root, {
            name: 'ItemCard',
            listeners: ['click']
        })
    }

    toHTML() {
        return createCardTemplate()
    }

    init() {
        super.init()
    }

    async onClick(event) {
        const $target = $(event.target)
        if ($target.data.remove) {
            const decisionText = 'Are you sure that you want delete this product?'
            const decision = confirm(decisionText)

            if (decision) {
                await ProductAPI.remove($target.data.remove).then(response => {
                    alert(response.message)
                    ActiveRoute.navigate('add')
                })
            }
        }

        if ($target.data.update) {
            ActiveRoute.navigate(`edit/${$target.data.update}`)
        }
    }
}
