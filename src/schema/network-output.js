'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NetworkOutputSchema = new Schema({
    symbol: String,
    result: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('NetworkOutput', NetworkOutputSchema);
