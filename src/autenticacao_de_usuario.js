const express = require("express");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(bodyParser.json());

app.get("/", (request, response) =>{
    response.json({Teste: "Testando ambiente"})
});

app.listen(3000);