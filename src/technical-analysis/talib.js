'use strict';

const talib = require('talib');

/**
 * @name processPrices
 * @param {string} symbol
 * @param {object} indicator
 * @param {array} data
 * @returns {Promise}
 * Transforms price data and calls talib for a given indicator
 */
module.exports = (indicator, data) => {
    const talibData = Object.assign({
        name: indicator.name,
        startIdx: 0,
        endIdx: data.length - 1,
        open: [],
        close: [],
        low: [],
        high: [],
        volume: []
    }, indicator.params);

    data.forEach((item) => {
        talibData.open.push(item.open);
        talibData.close.push(item.high);
        talibData.low.push(item.high);
        talibData.high.push(item.high);
        talibData.volume.push(item.volume);
    });

    return new Promise((resolve) => talib.execute(talibData, resolve));
};
