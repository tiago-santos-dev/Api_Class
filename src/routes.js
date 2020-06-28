const express = require('express');

const routes =  express.Router();

const MessageController = require('./controllers/MessageController');
const FeedController = require('./controllers/FeedController');
const SendController = require('./controllers/SendController');

routes.get('/received', MessageController.index);

routes.get('/feed', FeedController.index);

routes.post('/send-feed', FeedController.send);

routes.post('/send-message-friend', SendController.send);

routes.post('/send', MessageController.send );

module.exports = routes;