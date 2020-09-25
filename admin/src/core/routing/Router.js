import {$} from '@core/DOM/DOM'
import {ActiveRoute} from '@core/routing/ActiveRoute'
import {AuthGuard} from '@shared/classes/Authorization.guard'

export class Router {
    constructor(selector, routes) {
        if (!selector) {
            throw new Error('Selector is not provided in Router')
        }

        this.$placeholder = $(selector)
        this.routes = routes
        this.changePageHandler = this.changePageHandler.bind(this)
        this.page = null

        this.init()
    }

    init() {
        window.addEventListener('hashchange', this.changePageHandler)
        this.changePageHandler()
    }

    changePageHandler() {
        if (this.page) {
            this.page.destroy()
        }

        this.$placeholder.clear()
        const Page = currentRoute(this.routes)
        this.page = new Page(ActiveRoute.param)

        this.$placeholder.append(this.page.getRoot())
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
    }
}