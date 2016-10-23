'use strict';

const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RatingSchema = new Schema({
    symbol: String,
    date: {
        type: Date,
        default: () => {
            return moment().startOf('day');
        }
    },
    firmKey: String,
    firmFullText: String,
    value: String
}, { timestamps: true });

module.exports = mongoose.model('Rating', RatingSchema);
