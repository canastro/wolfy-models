'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TweetSchema = new Schema({
    key: String,
    date: Date,
    symbol: String,
    text: String,
    screen_name: String,
    followers_count: Number,
    absolute_sentiment: Number,
    relative_sentiment: Number
}, { timestamps: true });

module.exports = mongoose.model('Tweet', TweetSchema);
