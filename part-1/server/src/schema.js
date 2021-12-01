const { gql } = require('apollo-server');

const typeDefs = gql`
    
    type Query {
        "Query to get Tracks array for the homepage grid"
        tracksForHome: [Track!]!
    }
    
    
    "A Track is a group of Modules that teaches about a specific topic"
    type Track {
        id: ID!
        "The Track's title"
        title: String!
        "The Track's main Author"
        author: Author!
        "The Track's main illustration to display n Track card or Track page detail"
        thumbnail: String
        "The Track's approximate length to complete, in minutes"
        length: Int
        "The number of modules this Track contains"
        modulesCount: Int
    }
    
    "Author of a complete track"
    type Author {
        id: ID!
        "Author's first and last name"
        name: String!
        "Author's profile picture url"
        photo: String
    }

`;

module.exports = typeDefs;
