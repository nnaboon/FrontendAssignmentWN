var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require("cors");

const apiRouter = require('./routes/api');

app.use(bodyParser.json());
app.use(cors());

app.use('/api', apiRouter);

app.listen(3001, () => {
    console.log("Server start at port 3001");
})