const { gql } = require('apollo-server');

module.exports = gql`
type Recipie {
    name: String
    Description: String
    createdAt: String
    thumbsUp: Int
    thumbsDown: Int
}
input RecipieInput {
    name: String
    description: String
}

type Query {
    recipie(ID: ID!): Recipie
    getRecipies(amount: Int): [Recipie]
}

type Mutation {
    createRecipie(recipieInput: RecipieInput): Recipie!
    editRecipie(ID: ID!, recipieInput: RecipieInput): Boolean
    deleteRecipie(ID: ID!): Boolean
}
`