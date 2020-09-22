import {AuthorizationAPI} from '@shared/services/Authorization.service'
import {ActiveRoute} from '@core/routing/ActiveRoute'

class AuthorizationGuard {
    constructor(api) {
        this.authorizationService = api
    }

    canActivate() {
        if (this.authorizationService.isAuthenticated()) {
            return true
        } else {
            ActiveRoute.navigate('login')
            alert('No authorization')
        }
    }
}

export const AuthGuard = new AuthorizationGuard(AuthorizationAPI)