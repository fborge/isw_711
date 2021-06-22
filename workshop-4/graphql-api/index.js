
const mongoose=require('mongoose')
const express=require('express')
const bodyParser=require('body-parser')
const cors = require('cors');

const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const config=require('./config.js')


const app=express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors({
  domains: '*',
  methods: "*"
}));



mongoose.connect(config.db, {useNewUrlParser:true, useUnifiedTopology: true} ,(err,res)=>{
    if(err){
        return console.log('Conection failed')
    }
    app.listen(config.port,()=>{
        console.log(`Server is running in http:/localhost:${config.port}`)
    })
})

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));
