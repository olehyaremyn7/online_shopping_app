import {HeaderComponent} from '@core/partials/HeaderComponent'
import {createHeaderTemplate} from '@shared/templates/partials/header.template'
import {ActiveRoute} from '@core/routing/ActiveRoute'
import {$} from '@core/DOM/DOM'
import {AuthorizationAPI} from '@shared/services/Authorization.service'

export class Header extends HeaderComponent {
    static className = 'admin__header'

    constructor($root) {
        super($root, {
            name: 'Header',
            listeners: ['click']
        })
        this.activeLink = ActiveRoute.path
    }

    toHTML() {
        return createHeaderTemplate(this.activeLink)
    }

    init() {
        super.init()
    }

    onClick(event) {
        const $target = $(event.target)
        if ($target.data.btn === 'logout') {
            const decisionText = 'Are you sure that you want to log out?'
            const decision = confirm(decisionText)

            if (decision) {
                AuthorizationAPI.logout()
                ActiveRoute.navigate('')
            }
        }
    }
}
