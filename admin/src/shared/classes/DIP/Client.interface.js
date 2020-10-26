export class Client {
    constructor(api) {
        this.api = api
    }

    async get() {
        return await this.api.fetch()
    }

    async getById(id) {
        return await this.api.getById(id)
    }
}
