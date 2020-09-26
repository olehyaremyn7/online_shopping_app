const error = require('../utils/error-handler.utils')
const Product = require('../models/Product')

module.exports.createController = async (req, res) => {
    try {
        const product = new Product({
            image: req.file ? req.file.path : '',
            title: req.body.title,
            category: req.body.category,
            description: req.body.description,
            price: req.body.price
        })

        await product.save()

        res.status(201).json({message: 'New product was successfully created', product})
    } catch (e) {
        error(res, e)
    }
}