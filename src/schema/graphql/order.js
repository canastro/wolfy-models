'use strict';

const {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLFloat,
    GraphQLBoolean
} = require('graphql');

const GraphQLDate = require('graphql-date');

module.exports = new GraphQLObjectType({
    name: 'Price',
    fields: {
        symbol: { type: GraphQLString },
        date: { type: GraphQLDate },
        amount: { type: GraphQLInt },
        value: { type: GraphQLFloat },
        type: { type: GraphQLString },
        isActive: { type: GraphQLBoolean }
    }
});
