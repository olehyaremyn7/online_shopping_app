import {Page} from '@core/page/Page'
import {$} from '@core/DOM/DOM'
import {createStartTemplate} from '@shared/templates/start.template'

export class StartPage extends Page {
    getRoot() {
        return $.create('div', 'start').html(
            createStartTemplate()
        )
    }
}