import {Page} from '@shared/classes/Page'
import {Dashboard} from '@shared/components/dashboard/Dashboard'
import {Header} from '@shared/components/header/Header'
import {DashboardStats} from '@shared/components/dashboard/dashboard-stats/DashboardStats'
import {Processor} from '@shared/classes/DIP/Processor.interface'
import {Client} from '@shared/classes/DIP/Client.interface'
import {DashboardAPI} from '@shared/services/Dashboard.service'

export class DashboardPage extends Page {
    constructor() {
        super()
        this.processor = new Processor(
            new Client(DashboardAPI)
        )
    }

    async getRoot() {
        const info = await this.processor.get()
        localStorage.setItem('info', JSON.stringify(info))

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
