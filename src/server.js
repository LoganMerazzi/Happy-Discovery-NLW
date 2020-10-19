const express = require('express');
const path = require('path');
const pages = require('./pages.js');

//console.log(pages)

// iniciando o express
const server = express();
 server
  // utilizar body da req
  .use(express.urlencoded({ extended: true }))

  // Utilizando arquivos estáticos
  .use(express.static('public'))

  // configurando template engine
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'hbs')

  //criar as rotas
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage)
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOrphanage)
  .post('/save-orphanage', pages.saveOrphanage)

// ligar o server
server.listen(5500);
