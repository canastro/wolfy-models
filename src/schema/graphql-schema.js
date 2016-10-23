'use strict';

//TODO: this is temporary... I hope I'll be able to do this with graffiti.
const {
    GraphQLObjectType,
    GraphQLInputObjectType,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLID,
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat
} = require('graphql');

const Order = require('./order');
const Price = require('./price');
const talib = require('../technical-analysis/talib');

const ResultType = new GraphQLObjectType({
    name: 'Result',
    fields: {
        outReal: {
            type: new GraphQLList(GraphQLFloat)
        },
        outRealUpperBand: {
            type: new GraphQLList(GraphQLFloat)
        },
        outRealMiddleBand: {
            type: new GraphQLList(GraphQLFloat)
        },
        outRealLowerBand: {
            type: new GraphQLList(GraphQLFloat)
        }
    }
});

const PriceType = new GraphQLObjectType({
    name: 'Price',
    fields: {
        last: { type: GraphQLFloat },
        open: { type: GraphQLFloat },
        high: { type: GraphQLFloat },
        low: { type: GraphQLFloat },
        volume: { type: GraphQLInt }
    }
});

const ChartType = new GraphQLObjectType({
    name: 'Chart',
    fields: {
        '_id': {
            type: new GraphQLNonNull(GraphQLID)
        },
        begIndex: {
            type: GraphQLInt
        },
        nbElement: {
            type: GraphQLInt
        },
        result: {
            type: ResultType
        },
        prices: {
            type: new GraphQLList(PriceType)
        }
    }
});

const ChartIndicatorParamsType = new GraphQLInputObjectType({
    name: 'ChartIndicatorParams',
    fields: {
        optInTimePeriod: {
            type: GraphQLInt
        }
    }
});

const ChartIndicatorType = new GraphQLInputObjectType({
    name: 'ChartIndicator',
    fields: {
        name: {
            type: GraphQLString
        },
        params: {
            type: ChartIndicatorParamsType
        }
    }
});

module.exports = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            chart: {
                type: ChartType,
                args: {
                    symbol: {
                        name: 'symbol',
                        type: GraphQLString
                    },
                    indicator: {
                        name: 'indicator',
                        type: ChartIndicatorType
                    }
                },
                resolve (root, params) {
                    return Price.find({ symbol: params.symbol }).exec().then((prices) =>
                        talib(params.indicator, prices)
                            .then((response) => Object.assign(response, { prices }))
                    );
                }
            },
            balance: {
                type: GraphQLInt,
                args: {
                    symbol: {
                        name: 'symbol',
                        type: GraphQLString
                    }
                },
                resolve (root, params) {
                    return Order.find({ symbol: params.symbol }).exec().then((orders) =>
                        orders
                            .map((item) => item.type === 'BUY' ? item.value * -1 : item.value)
                            .reduce((prev, cur) => prev + cur, 0)
                    );
                }
            }
        }
    })
});
