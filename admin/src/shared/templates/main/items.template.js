function createCard(product) {
    const image = 'http://localhost:5000/' + product.image
    return `
        <div class="items__card">
            <div class="items__card-image">
                <img src="${image}" alt="image">
            </div>
            <div class="items__card-body">
                <div class="items__card-title">
                    <a href="#">${product.title}</a>
                </div>
                <div class="items__card-price">
                    <p>$${product.price}</p>
                </div>
            </div>
            <div class="items__card-footer">
                <a class="button edit" data-update="${product._id}">Edit</a>
                <a class="button remove" data-remove="${product._id}">Remove</a>
            </div>
        </div>
    `
}

function noItemsTemplate() {
    return `<h1 class="no_items_text">No items</h1>`
}

export function createCardTemplate() {
    const fetchData = JSON.parse(localStorage.getItem('products'))
    const cards = fetchData.map(data => createCard(data))
    localStorage.setItem('products', null)

    if (cards.length > 0) {
        return cards.join('')
    } else {
        return noItemsTemplate()
    }
}
