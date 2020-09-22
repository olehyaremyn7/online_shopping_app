const error = require('../utils/error-handler.utils')

module.exports.getAll = (req, res) => {
    try {
        res.status(200).json({message: 'Dashboard info'})
    } catch (e) {
        error(res, e)
    }
}