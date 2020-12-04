const express = require('express');
const app = express();
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const Sequelize = require('sequelize')

//Config
//Template Engine
app.engine("handlebars", handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
//Body Parser
app.set(bodyParser.urlencoded({extended: false}))
app.set(bodyParser.json())

//Conexão com o banco de dados Mysql
const sequelize = new Sequelize('test', 'root', 'alexis', {
    host: "localhost",
    dialect: "mysql"
})
//Rotas 
app.get("/cad", function(req, res){
// res.send("ROTA DE CADASTRO DE POSTS")
res.render('formulario')
})
//Curso de Node.js - Body parser #22 dando erro corrigir
app.post("/add", function(req, res){
    res.send("Texto: "+req.body.titulo+" Conteudo: "+req.body.conteudo)
})

app.listen(8081, function () {
    console.log("servidor rodando na url http://localhost:8081");
});
