export function createAddFormTemplate() {
    return `
    <h1>Add new product</h1>
    <form id="add-form">
        <div class="form-control">
            <label for="title">Title</label>
            <input class="title" type="text" id="title">
        </div>

        <div class="form-control">
            <label for="category">Category</label>
            <select class="category__select" name="category" id="category">
                <option class="category__option">Choose category</option>
                <option class="category__option">Category 1</option>
                <option class="category__option">Category 2</option>
            </select>
        </div>

        <div class="form-control">
            <label for="price">Price</label>
            <input class="price" type="number" min="1" id="price">
        </div>

        <div class="form-control">
            <label for="description">Description</label>
            <textarea name="description" id="description" cols="30" rows="10" placeholder="Enter item description..."></textarea>
        </div>

        <div class="form-control">
            <label class="image" for="image">
                <i style="vertical-align: bottom;" class="material-icons">add_photo_alternate</i> &nbsp;
                Choose image file
            </label>
            <input type="file" name="image" class="image" id="image" accept="image/*">
        </div>

        <button class="button" type="submit">Submit</button>
    </form>
    `
}