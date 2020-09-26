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

            return useRequest(request)
        } catch (e) {
            alert('Error:' + e)
        }
    }
}

async function useRequest(request) {
    const response = await fetch(request)
    if (response.ok) {
        const json = await response.json()
        return {
            status: response.ok,
            ...json
        }
    } else {
        return await response.json()
    }
}

export const ProductAPI = new ProductService('/api/admin/product')