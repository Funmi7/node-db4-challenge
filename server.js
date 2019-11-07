const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('server running')
})

server.get('/api/recipes', (req, res) => {
    db('recipes')
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(error => {
        res.status(500).json({
            error: `Unable to fetch recipes ${error.message}`
        })
    })
})

module.exports = server;