'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StockSchema = new Schema({
    symbol: { type: String, index: { unique: true }},
    name: String,
    type: String,
    last_tweet_id: String
});

module.exports = mongoose.model('Stock', StockSchema);
