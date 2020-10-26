import {$} from '@core/DOM/DOM'

export class Edit {
    constructor(options) {
        this.components = options.components || []
    }

    getRoot() {
        const $root = $.create('div', 'edit')

        this.components = this.components.map(Component => {
            const $el = $.create('div', Component.className)
            const component = new Component($el)
            $el.html(component.toHTML())
            $root.append($el)
            return component
        })

        return $root
    }

    init() {
        this.components.forEach(component => component.init())
    }

    destroy() {
        this.components.forEach(component => component.destroy())
    }
}
