'use strict';

const moment = require('moment');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    symbol: String,
    date: {
        type: Date,
        default: () => {
            return moment().startOf('hour');
        }
    },
    title: String,
    text: String,
    url: String,
    sentiment: { type: Number, default: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Article', ArticleSchema);
