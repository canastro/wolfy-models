'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscriberSchema = new Schema({
    name: String,
    email: String
});

module.exports = mongoose.model('Subscriber', SubscriberSchema);
