const graffitiSchema = require('./schema/graffiti-schema');
const graphQLSchema = require('./schema/graphql-schema');

const Article = require('./schema/article');
const Candle = require('./technical-analysis/candle');
const Job = require('./schema/job');
const Order = require('./schema/order');
const Price = require('./schema/price');
const Rating = require('./schema/rating');
const SentimentReport = require('./schema/sentiment-report');
const Stock = require('./schema/stock');
const Subscriber = require('./schema/subscriber');
const Tweet = require('./schema/tweet');

module.exports = {
    graffitiSchema,
    graphQLSchema,

    Article,
    Candle,
    Job,
    Order,
    Price,
    Rating,
    SentimentReport,
    Stock,
    Subscriber,
    Tweet
};
