const express = require('express');

const routes = require('./src/routes');

const cors = require('cors');

const app = express();

app.use(cors()); // Permite acesso externo a API

app.use(express.json()); // Permite o envio de json para a api

app.use(routes);//importação das rotas

app.listen(3001); // Configuração de Porta 