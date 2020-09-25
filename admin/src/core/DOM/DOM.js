class DOM {
    constructor(selector) {
        this.$el = typeof selector === 'string'
            ? document.querySelector(selector)
            : selector
    }

    html(html) {
        if (typeof html === 'string') {
            this.$el.innerHTML = html
            return this
        }
        return this.$el.outerHTML.trim()
    }

    clear() {
        this.html('')
        return this
    }

    on(eventType, callback) {
        this.$el.addEventListener(eventType, callback)
    }

    off(eventType, callback) {
        this.$el.removeEventListener(eventType, callback)
    }

    append(node) {
        if (node instanceof DOM) {
            node = node.$el
        }

        if (Element.prototype.append) {
            this.$el.append(node)
        } else {
            this.$el.appendChild(node)
        }

        return this
    }

    find(selector, option) {
        if (!option) {
            return $(this.$el.querySelector(selector))
        } else {
            return this.$el.querySelector(selector)
        }
    }

    get data() {
        return this.$el.dataset
    }

    attr(name, value, option) {
        if (value) {
            this.$el.setAttribute(name, value)
            return this
        } else if (option) {
            this.$el.removeAttribute(name)
            return this
        }
        return this.$el.getAttribute(name)
    }
}

export function $(selector) {
    return new DOM(selector)
}

$.create = (tagName, classes = '') => {
    const el = document.createElement(tagName)
    if (classes) {
        el.classList.add(classes)
    }
    return $(el)
}