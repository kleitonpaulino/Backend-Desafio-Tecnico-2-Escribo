const express = require("express");

const app = express();

app.get("/", (request, response) =>{
    response.json({Teste: "Testando ambiente"})
});

app.listen(3000)