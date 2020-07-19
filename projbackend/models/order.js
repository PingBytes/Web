const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
    product:{
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number
})

const ProductCart = mongoose.model("ProductCartSchema",ProductCartSchema);


const OrderScehma = new mongoose.Schema({
    products: [ProductCartSchema],
    transaction_id: {},
    amount: {type: Number},
    address: String,
    updated: Date,
    user: {
        type: ObjectId,
        ref: "User"
    }
},{timestamps: true});

const Order = mongoose.model("Order",OrderScehma);

module.exports = {Order,ProductCart}