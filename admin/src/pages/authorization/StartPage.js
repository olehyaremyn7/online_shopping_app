import {Page} from '@shared/classes/Page'
import {$} from '@core/DOM/DOM'
import {createStartTemplate} from '@shared/templates/authorization/start.template'

export class StartPage extends Page {
    getRoot() {
        return $.create('div', 'start').html(
            createStartTemplate()
        )
    }
}
