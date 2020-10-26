export class Processor {
    constructor(client) {
        this.client = client
    }

    get() {
        return this.client.get()
    }

    getById(id) {
        return this.client.getById(id)
    }
}
