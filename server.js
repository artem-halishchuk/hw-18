let express = require('express');
//let DefaultResponse = require('./dto/default-response');
let bodyParser = require('body-parser')
let app = express();

// let pgp = require('pg-promise')();
// let db = pgp('postgres://postgres:somePassword@localhost:5432/note');

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
// app.get('/notes', (req, res) => {
//     res.setHeader('Content-Type','application/json')
//     db.any('select * from notes order by id')
//         .then(notes => new DefaultResponse('ok', notes))
//         .then(r => JSON.stringify(r))
//         .then(json => res.send(json));
// });
// app.post('/notes', (req, res) => {
//     res.setHeader('Content-Type','application/json')
//     let note = req.body;
//     if (!note.name || !note.note) {
//         res.send(JSON.stringify(new DefaultResponse('error', 'empty')));
//         return;
//     }
//     db.none('INSERT INTO notes(name, note) VALUES(${name}, ${note})', {
//         name: note.name,
//         note: note.note,
//     }).then(s => {
//         res.send(JSON.stringify(new DefaultResponse('ok')));
//     }, e => {
//         res.send(JSON.stringify(new DefaultResponse('error')));
//     })
// });
// app.delete('/notes/:id', (req, res) => {
//     res.setHeader('Content-Type','application/json')
//     let id = req.params.id;
//     if (!id) {
//         res.send(JSON.stringify(new DefaultResponse('error', 'empty')));
//         return;
//     }
//     db.none('delete from notes where id = ${id}', {
//         id: id
//     }).then(s => {
//         res.send(JSON.stringify(new DefaultResponse('ok')));
//     }, e => {
//         console.log(e);
//         res.send(JSON.stringify(new DefaultResponse('error')));
//     })
// });
usersController(app,__dirname);
app.listen(3000);