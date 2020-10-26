import {AuthorizationAPI} from '@shared/services/Authorization.service'
import {ActiveRoute} from '@core/routing/ActiveRoute'

class TokenInterceptor {
    constructor(api) {
        this.authorizationService = api
    }

    intercept() {
        if (this.authorizationService.isAuthenticated()) {
            return {
                'Authorization': this.authorizationService.getToken()
            }
        } else {
            ActiveRoute.navigate('login')
            alert('No authorization')
        }
    }
}

export const tokenInterceptor = new TokenInterceptor(AuthorizationAPI)