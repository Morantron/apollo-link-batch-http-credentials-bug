const express = require('express')
const bodyParser = require('body-parser')
const basicAuth = require('express-basic-auth')
const { graphqlExpress }  = require('apollo-server-express')
const { buildSchema } = require('graphql')
const { makeExecutableSchema } = require('graphql-tools')

const app = express()

app
  .use(basicAuth({
      users: { apollo: 'forthewin' },
      challenge: true
  }))
  .use(bodyParser.json())
  .use(express.static('build'))

const typeDefs = `
type Query {
  hello: String
}
`

const resolvers = {
  Query: { hello: _ => 'hello world!' }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

const rootValue = {
  hello: _ => 'hello world!'
}

app.use('/graphql', graphqlExpress({ schema }));

app.listen(9889, _ => console.log('Listening on port', 9889))
