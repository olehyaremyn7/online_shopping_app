import {tokenInterceptor} from '@shared/classes/token.interceptor'

class ProductService {
    constructor(ProductUrl) {
        this.url = ProductUrl
    }

    async create(product) {
        try {
            const formData = new FormData()

            formData.append('title', product.title)
            formData.append('category', product.category)
            formData.append('description', product.description)
            formData.append('price', product.price)
            formData.append('image', product.image, product.image.name)

            const request = new Request(`${this.url}`, {
                method: 'POST',
                body: formData,
                headers: tokenInterceptor.intercept()
            })

            const response = await fetch(request)
            return await response.json()
        } catch (e) {
            alert('Error:' + e)
        }
    }

    async getById(id) {
        try {
            const request = new Request(`${this.url}/${id}`, {
                method: 'GET',
                headers: tokenInterceptor.intercept()
            })

            const response = await fetch(request)
            return await response.json()
        } catch (e) {
            alert('Error:' + e)
        }
    }

    async fetch() {
        try {
            const request = new Request(`${this.url}`, {
                method: 'GET',
                headers: tokenInterceptor.intercept()
            })

            const response = await fetch(request)
            return await response.json()
        } catch (e) {
            alert('Error:' + e)
        }
    }

    async remove(id) {
        try {
            const request = new Request(`${this.url}/${id}`, {
                method: 'DELETE',
                headers: tokenInterceptor.intercept()
            })

            const response = await fetch(request)
            return await response.json()
        } catch (e) {
            alert('Error:' + e)
        }
    }

    async update(id, product) {
        try {
            const formData = new FormData()

            if (product.image) {
                formData.append('image', product.image, product.image.name)
            }

            formData.append('title', product.title)
            formData.append('category', product.category)
            formData.append('description', product.description)
            formData.append('price', product.price)

            const request = new Request(`${this.url}/${id}`, {
                method: 'PATCH',
                body: formData,
                headers: tokenInterceptor.intercept()
            })

            const response = await fetch(request)
            return await response.json()
        } catch (e) {
            alert('Error:' + e)
        }
    }
}

export const ProductAPI = new ProductService('/api/admin/product')
