let bodyParser = require('body-parser');
let DefaultResponse = require('./dto/default-response');
let pgp = require('pg-promise')();
let db = pgp('postgres://postgres:somePassword@localhost:5432/note');

function usersController(app, path) {
    let jsonParser = bodyParser.json();
    app.get('/notes', (req, res) => {
        res.setHeader('Content-Type','application/json')
        db.any('select * from notes order by id')
            .then(notes => new DefaultResponse('ok', notes))
            .then(r => JSON.stringify(r))
            .then(json => res.send(json));
    });
    app.post('/notes', (req, res) => {
        res.setHeader('Content-Type','application/json')
        let note = req.body;
        if (!note.name || !note.note) {
            res.send(JSON.stringify(new DefaultResponse('error', 'empty')));
            return;
        }
        db.none('INSERT INTO notes(name, note) VALUES(${name}, ${note})', {
            name: note.name,
            note: note.note
        }).then(s => {
            res.send(JSON.stringify(new DefaultResponse('ok')));
        }, e => {
            res.send(JSON.stringify(new DefaultResponse('error')));
        })
    });
}
module.exports = usersController;