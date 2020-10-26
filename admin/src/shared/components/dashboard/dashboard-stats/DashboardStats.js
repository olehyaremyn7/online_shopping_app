import {DashboardComponent} from '@core/main/DashboardComponent'
import {createDashboardStatsTemplate} from '@shared/templates/main/dashboard.template'

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
    }
}
