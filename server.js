let express = require('express');
let bodyParser = require('body-parser')
let app = express();
let usersController = require('./usersController');
//import {usersController} from './usersController';
let path = require('path');
let HTML_FILE = path.join(__dirname, 'dist/index.html');
app.use(bodyParser.json());
app.use(express.static(__dirname+'/dist'));
app.use(express.static(__dirname+'/dist'));
app.get('/', (req, res) => {
    res.sendFile(HTML_FILE);
});
usersController(app,__dirname);
app.listen(3000);