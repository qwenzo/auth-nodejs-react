const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const htpp = require('http');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());

const PORT = 3090;
const server =htpp.createServer(app);
server.listen(PORT , () =>{
    console.log('server is listening to',PORT);
});