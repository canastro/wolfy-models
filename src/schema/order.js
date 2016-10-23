'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    symbol: String,
    amount: Number,
    value: Number,
    type: String,
    isActive: { type: Boolean, default: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', OrderSchema);
