'use strict';

const CANDLE_TYPES = [{
    name: 'DOJI',
    fn: (candle) => {
        const difference = Math.abs(candle.open - candle.last);
        return difference < (difference * 0.001);
    }
}, {
    name: 'MARUBOZU',
    fn: (candle) => candle.open === candle.high || candle.last === candle.low
}, {
    name: 'LONG_UPPER_SHADOW',
    fn: (candle) => (candle.high - candle.open) > (2 * (candle.close - candle.low))
}, {
    name: 'LONG_LOWER_SHADOW',
    fn: (candle) => (candle.open - candle.low) > (2 * (candle.high - candle.close))
}];

/**
 * @name getCandleType
 * @param {object} candle
 * @returns {string}
 * Given a candle the CANDLE_TYPES are iterated trying to identify
 * the specific type of candle
 */
exports.getCandleType = (candle) => {
    const item = CANDLE_TYPES.find((type) => type.fn(candle));

    if (!item) {
        return null;
    }

    return item.name;
};

/**
 * @name getCandleColor
 * @param {object} candle
 * @returns {string} GREEN | RED | WHITE
 * Given a candle a color is returned based on opening and closing prices
 */
exports.getCandleColor = (candle) => {
    if (candle.last > candle.open) {
        return 'GREEN';
    } else if (candle.last < candle.open) {
        return 'RED';
    }
    return 'WHITE';
};
