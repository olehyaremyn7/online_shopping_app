import {Router} from '@core/routing/Router'
import {StartPage} from '@/pages/authorization/StartPage'
import {LoginPage} from '@/pages/authorization/LoginPage'
import {RegistrationPage} from '@/pages/authorization/RegistrationPage'
import {DashboardPage} from '@/pages/main/DashboardPage'
import {AddPage} from '@/pages/main/AddPage'
import './stylesheets/scss/index.scss'

new Router('#app', {
    start: StartPage,
    login: LoginPage,
    registration: RegistrationPage,
    dashboard: DashboardPage,
    add: AddPage
})
