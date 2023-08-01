const mongoose = require('mongoose')
const { Orders } = require('./orders')
const { Product } = require('./product')

const orderItemsSchema = mongoose.Schema({
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }

})

exports.OrderItems = mongoose.model('OrderItems',orderItemsSchema)
