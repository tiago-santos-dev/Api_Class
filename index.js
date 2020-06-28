const express = require('express');

const routes = require('./src/routes');

const cors = require('cors');

const app = express();

app.use(express.json()); // Permite o envio de json para a api

app.use(cors()); // Permite acesso externo a API

app.use(routes);//importação das rotas

app.listen(3001); // Configuração de Porta 