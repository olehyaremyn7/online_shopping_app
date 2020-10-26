import {$} from '@core/DOM/DOM'
import {ActiveRoute} from '@core/routing/ActiveRoute'
import {AuthGuard} from '@shared/classes/Authorization.guard'
import {Loader} from '@shared/components/loader/Loader'

export class Router {
    constructor(selector, routes) {
        if (!selector) {
            throw new Error('Selector is not provided in Router')
        }

        this.$placeholder = $(selector)
        this.routes = routes
        this.changePageHandler = this.changePageHandler.bind(this)
        this.page = null
        this.loader = new Loader()

        this.init()
    }

    init() {
        window.addEventListener('hashchange', this.changePageHandler)
        this.changePageHandler()
    }

    async changePageHandler() {
        if (this.page) {
            this.page.destroy()
        }

        this.$placeholder.clear().append(this.loader)
        const Page = currentRoute(this.routes)
        this.page = new Page()

        const root = await this.page.getRoot()

        this.$placeholder.clear().append(root)
        this.page.afterRender()
    }

    destroy() {
        window.removeEventListener('hashchange', this.changePageHandler)
    }
}

function currentRoute(routes) {
    const path = ActiveRoute.path
    switch (path) {
        case '':
            return routes.start
        case 'login':
            return routes.login
        case 'registration':
            return routes.registration
        case 'dashboard':
            if (AuthGuard.canActivate()) {
                return routes.dashboard
            }
            break
        case 'add':
            if (AuthGuard.canActivate()) {
                return routes.add
            }
            break
        case 'items':
            if (AuthGuard.canActivate()) {
                return routes.items
            }
            break
        case `edit/${ActiveRoute.param}`:
            if (AuthGuard.canActivate()) {
                return routes.edit
            }
            break
    }
}
