const express = require('express');
const helmet = require('helmet');

const recipeRouter = require('./recipes/recipe-router')

const server = express();

server.use(helmet());
server.use(express.json());

// server.get('/', (req, res) => {
//     res.send('server running')
// })

server.use('/api/recipes', recipeRouter);


module.exports = server;