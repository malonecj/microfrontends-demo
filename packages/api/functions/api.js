var express = require('express');
const serverless = require('serverless-http');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const cors = require('cors');
const ads = require('../data/ad-data');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
    ads(category: String): [Ad]
    ad(id: ID): Ad
  }

  type Ad {
      id: ID
      title: String
      category: String
      price: String
      location: String
      imageUrl: String
      posted: String
  }
`);

function getAdById(id) {
  const ad = ads.find(ad => ad.id == id);
  return ad;
}

// The root provides a resolver function for each API endpoint
var root = {
  ads: ({ category }) => ads.filter(ad => ad.category === category),
  ad: ({ id }) => getAdById(id)
};

var app = express();
app.use(express.json());
app.use(cors());
app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
module.exports.handler = serverless(app);