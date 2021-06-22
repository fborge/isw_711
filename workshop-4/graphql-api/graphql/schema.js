const{ buildSchema } = require('graphql'); 

const schema = buildSchema(`
  type Query {
    orders: [Order]
    products: [Product]
    clients: [Client]
    
  }

  type Mutation {
    addClient(clientInput:ClientInput): Client
    updateClient(id: ID!, clientInput: ClientInput): Client!
    addProduct(productInput: ProductInput): Product
    updateProduct(id: ID!, productInput: ProductInput): Product!
    addOrder(orderInput:OrderInput): Order
  }

  type Order {
    id: ID!
    client: Client!
    products: [Product]!
  }

  input OrderInput{
    clientId: String
    productId: String
  }
  
  type Client {
    id: ID!
    name: String!
    lastname: String!
    email: String
    website: String
  }

  input ClientInput { 
    name: String!
    lastname: String!
    email: String
    website: String
  }

  
  type Product {
    id: ID!
    quantity: Int!
    name: String!
    price: Int!
  }

  input ProductInput { 
    quantity: Int!
    name: String!
    price: Int!
  }

  schema { 
    query: Query
    mutation: Mutation
  }
  `   
  );

module.exports = schema;