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

module.exports.getAllController = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (e) {
        error(res, e)
    }
}

module.exports.getByIdController = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product)
    } catch (e) {
        error(res, e)
    }
}

module.exports.updateController = async (req, res) => {
    try {
        const updated = {
            title: req.body.title,
            category: req.body.category,
            description: req.body.description,
            price: req.body.price
        }

        if (req.file) {
            updated.image = req.file.path
        }

        const product = await Product.findOneAndUpdate(
            {_id: req.params.id},
            {$set: updated},
            {new: true}
        )

        res.status(200).json({message: 'Product was successfully updated', product})
    } catch (e) {
        error(res, e)
    }
}

module.exports.removeController = async (req, res) => {
    try {
        await Product.remove({_id: req.params.id})
        res.status(200).json({message: 'Product has been deleted'})
    } catch (e) {
        error(res, e)
    }
}
