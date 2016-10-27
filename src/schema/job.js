'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
    engine: String,
    params: String
}, { timestamps: true });

module.exports = mongoose.model('Job', JobSchema);
