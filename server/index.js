const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const htpp = require('http');
const router = require('./routes/index');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
router(app);

const PORT = 3090;
const server =htpp.createServer(app);
server.listen(PORT , () =>{
    console.log('server is listening to',PORT);
});