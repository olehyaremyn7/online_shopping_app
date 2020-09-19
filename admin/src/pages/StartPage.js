import {createStartTemplate} from '@shared/templates/start.template'
import {Page} from '@core/page/Page'
import {$} from '@core/DOM/DOM'

export class StartPage extends Page {
    getRoot() {
        return $.create('div', 'start').html(
            createStartTemplate()
        )
    }
}