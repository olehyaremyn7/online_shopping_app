import {DashboardComponent} from '@core/main/DashboardComponent'
import {createDashboardStatsTemplate} from '@shared/templates/dashboard.template'
import {DashboardAPI} from '@shared/services/Dashboard.service'

export class DashboardStats extends DashboardComponent {
    static className = 'dashboard__stats'

    constructor($root) {
        super($root, {
            name: 'DashboardStats',
            listeners: []
        })
    }

    toHTML() {
        return createDashboardStatsTemplate()
    }

    init() {
        super.init()
        dashboardHandler().then(response => console.log(response))
    }
}

async function dashboardHandler() {
    return await DashboardAPI.getAll()
}