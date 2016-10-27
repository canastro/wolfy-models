'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SentimentReportSchema = new Schema({
    symbol: String,
    type: String,
    date: Date,
    articles_sentiment: { type: Number, default: 0 },
    articles_volume: { type: Number, default: 0 },

    tweet_relative_sentiment: { type: Number, default: 0 },
    tweet_absolute_sentiment: { type: Number, default: 0 },
    tweet_volume: { type: Number, default: 0 }
});

module.exports = mongoose.model('SentimentReport', SentimentReportSchema);
