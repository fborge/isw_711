const express = require('express');
const app = express();

// database connection
const mongoose = require("mongoose");
const db = mongoose.connect("mongodb://127.0.0.1:27017/todo-api", { useNewUrlParser: true, useUnifiedTopology: true });

const {
  userPost
} = require("./controllers/userController.js");

// parser for the request body (required for the POST method)
const bodyParser = require("body-parser");
useNewUrlParser: true ;
app.use(bodyParser.json());

const cors = require("cors");
// check for cors
app.use(cors({
  domains: '*',
  methods: "*"
}));


// Case 1. Respond with a json object with the text Hello World when accessing the url /hello of via a GET.
app.get('/hello', function (req, res) {
    res.send('Hello World');
  });

  
// Case 2. If you send a parameter in the querystring with the name "message" 
//it will show replace the word in the response according to the value in the message attribute

 app.get('/hello', function (req, res) {
  var message=req.query.message || '';  
  res.send('Hello '+message);
});
 

//Case 3. Send a request via a POST with a body in JSON format that returns the text
// listen to the user request
app.post("/api/users", userPost);


app.listen(3000, () => console.log(`Example app listening on port 3000!`))
