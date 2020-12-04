/*https://www.youtube.com/watch?v=jk9aFVXR9Cs&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=17*/
//Curso de Node.js - Como se conectar ao MySQL #17

// const Sequelize = require('sequelize')
// const sequelize = new Sequelize('test', 'root', 'alexis', {
//     host: "localhost",
//     dialect: "mysql"
// })

// sequelize.authenticate().then(function(){
// console.log("Conectado com sucesso!")
// }).catch(function(erro) {
//     console.log("Falha ao se conectar:" + erro)
// })
//

/*https://www.youtube.com/watch?v=4ktEr1rbhx8&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=18*/
//Curso de Node.js - Models no Sequelize #18


const Sequelize = require('sequelize')
const sequelize = new Sequelize('test', 'root', 'alexis', {
    host: "localhost",
    dialect: "mysql"
})

const Postagem = sequelize.define("postagens", {
    titulo: {
    type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// Postagem.sync({force: true})
// Postagem.create({
//     titulo: "UM TITULO QUALQUER",
//     conteudo:"qualquer conteúdo!!!!!!!!!!!"
// })

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Usuario.sync({force: true})
Usuario.create({
    nome: "Victor",
    sobrenome: "Lima",
    idade: 20,
    email: "blabla@mail.com"
})
