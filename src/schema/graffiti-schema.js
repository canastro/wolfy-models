'use strict';

const gm = require('@risingstack/graffiti-mongoose');
const Article = require('./article');
const Job = require('./job');
const Price = require('./price');
const Rating = require('./rating');
const SentimentReport = require('./sentiment-report');
const Stock = require('./stock');
const Subscriber = require('./subscriber');
const Tweet = require('./tweet');
const Order = require('./order');

module.exports = gm.getSchema([
    Article,
    Job,
    Price,
    Rating,
    SentimentReport,
    Stock,
    Subscriber,
    Tweet,
    Order
]);
