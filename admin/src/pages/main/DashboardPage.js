import {Page} from '@core/page/Page'
import {Dashboard} from '@shared/components/dashboard/Dashboard'
import {Header} from '@shared/components/header/Header'
import {DashboardStats} from '@shared/components/dashboard/dashboard-stats/DashboardStats'

export class DashboardPage extends Page {
    getRoot() {
        this.dashboard = new Dashboard({
            components: [Header, DashboardStats]
        })

        return this.dashboard.getRoot()
    }

    afterRender() {
        this.dashboard.init()
    }

    destroy() {
        this.dashboard.destroy()
    }
}