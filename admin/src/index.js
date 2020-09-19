import './stylesheets/scss/index.scss'
import {Router} from '@core/routing/Router'
import {StartPage} from '@/pages/StartPage'
import {LoginPage} from '@/pages/LoginPage'
import {RegistrationPage} from '@/pages/RegistrationPage'

new Router('#app', {
    start: StartPage,
    login: LoginPage,
    registration: RegistrationPage
})
