const express = require('express');
const app = express();
// database connection
const mongoose = require("mongoose");
const db = mongoose.connect("mongodb://127.0.0.1:27017/todo-api",{useNewUrlParser:true, useUnifiedTopology: true});

const {
  coursePatch,
  coursePost,
  courseGet,
  courseDelete
} = require("./controllers/courseController.js");

// parser for the request body (required for the POST and PUT methods)
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// check for cors
const cors = require("cors");
app.use(cors({
  domains: '*',
  methods: "*"
}));


// listen to the task request
app.get("/api/courses", courseGet);
app.post("/api/courses", coursePost);
app.patch("/api/courses", coursePatch);
app.put("/api/courses", coursePatch);
app.delete("/api/courses", courseDelete);

app.listen(3000, () => console.log(`Example app listening on port 3000!`))
