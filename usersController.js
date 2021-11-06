let bodyParser = require('body-parser');
let DefaultResponse = require('./dto/default-response');
let pgp = require('pg-promise')();
let db = pgp('postgres://postgres:somePassword@localhost:5432/note');

function usersController(app, path) {
    let jsonParser = bodyParser.json();
    console.log(path);
    let controller = new UsersController();
    // app.get('/usersController', jsonParser, controller.getUsers.bind(controller));
    // app.post('/usersController', jsonParser, controller.addUser.bind(controller));

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
class UsersController{
    constructor() {
        this.notes = [petia, petia2];
    }
    addUser(request, response) {
        let note = request.body;

        if (note > -1) {
            response.send(this.notes[parseFloat(note)]);
        }
        else {
            this.notes.push(note);
            response.send(this.notes);
        }

    }
    getUsers(request, response) {
        response.send(this.notes);
    }
}
class Note {
    constructor(name, note) {
        this.name = name;
        this.note = note;
    }
}
let petia = new Note('petia', 'text 1');
let petia2 = new Note('petia2', 'text 2');
module.exports = usersController;