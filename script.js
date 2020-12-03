const express = require('express');
const app = express();

//CRIANDO UMA ROTA PARA A APLICAÇÃO.
//req=requisição.
//res=resposta
//send serve para enviar alguma coisa.
app.get("/", function(req, res) {
// res.send("Seja bem vindo ao meu APP!");
    //[Chamando arquivo HTML.]
// res.sendFile(__dirname+"/index.html");

    // TESTANDO MINHA PÁGINA DE CAPTURA.//
res.sendFile(__dirname + "/page/index.html")

});

//Criando outra rota para a aplicação chamado sobre.
app.get("/sobre", function(req, res) {
res.sendFile(__dirname+"/html/index.html");
});

//criando outra rota chamada blog.
app.get("/blog", function(req, res) {
res.send("bem vindo ao meu blog!");
});

//Criando rota dinâmica utilizando parâmetros
app.get("/ola/:cargo/:nome/:cor", function(req, res) {
// res.send("ola");
// res.send(req.params);
    res.send("<h1>ola "+req.params.nome+"</h1>");//OBS: A função send so pode ser enviada uma única vez dendro da função de uma rota!!!!!!!!!!
});

app.listen(8081, function () {
    console.log("servidor rodando na url http://localhost:8081");
});
