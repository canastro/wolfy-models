'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PriceSchema = new Schema({
    symbol: String,
    date: Date,
    last: { type: Number },
    open: { type: Number },
    high: { type: Number },
    low: { type: Number },
    volume: { type: Number },
    candle_color: { type: String },
    candle_type: { type: String }
});

module.exports = mongoose.model('Price', PriceSchema);
