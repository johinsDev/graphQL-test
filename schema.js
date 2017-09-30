const { makeExecutableSchema } = require('graphql-tools')

const typeDefs = `
#This is a course system
  type Course {
    id: ID!
    title: String!,
    description: String!,
    teacher: Teacher,
    rating: Float,
    comments: [Comment]
  }

  type Teacher {
    id: ID!,
    name: String!,
    nationality: String!,
    genre: Genre,
    courses: [Course]
  }

  type Comment {
    id: ID!,
    name: String!,
    content: String!
  }

  enum Genre {
    MAN,
    WOMEN
  }

  type Query {
    courses: [Course],
    course(id: Int): Course,
    teachers: [Teacher],
    teacher(id: Int): Teacher
  }
`

const resolvers = {
  Query: {
    courses: () => {
      return [
        {
          id: 1,
          title: 'Curso de graphql',
          description: 'Aprendiendo graphql'
        },
        {
          id: 2,
          title: 'Curso de php',
          description: 'Aprendiendo php'
        }
      ]
    }
  }
}

const schema = makeExecutableSchema({ 
  typeDefs,
  resolvers
})

module.exports = schema
