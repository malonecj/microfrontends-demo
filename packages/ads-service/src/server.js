var express = require('express');
var { graphqlHTTP } = require('express-graphql');
var { buildSchema } = require('graphql');
const cors = require('cors');
const ads = require('./ad-data');

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
    hello: () => {
        return 'Hello world!';
    },
    ads: ({ category }) => ads.filter(ad => ad.category === category),
    ad: ({ id }) => getAdById(id)
};

var app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.listen(4000);
console.log('Running a GraphQL API server at http://localhost:4000/graphql');