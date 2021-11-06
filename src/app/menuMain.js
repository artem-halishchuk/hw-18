export default class MenuMain {
    constructor(blockInsert, removeBlock, container) {
        this.blockInsert = blockInsert;
        this.activeElement = null;
        this.ul = null;
        this.removeBlock = removeBlock;
        this.container = container;
        this.createMenu();
    };
    createMenu() {
        let container = document.createElement('div');
        container.classList.add(this.container);
        this.blockInsert.append(container);

        let formWrapper = document.createElement('div');
        formWrapper.classList.add('form');
        container.append(formWrapper);

        let input = document.createElement('input');
        input.placeholder = 'Имя заметки';
        input.classList.add('input', 'form-name');
        formWrapper.append(input);

        let buttonAdd = document.createElement('button');
        buttonAdd.classList.add('button', 'form-add');
        buttonAdd.innerHTML = 'add';
        formWrapper.append(buttonAdd);

        let inputText = document.createElement('textarea');
        inputText.placeholder = 'Текст заметки';
        inputText.classList.add('input', 'form-text');
        container.append(inputText);

        buttonAdd.addEventListener('click', () => {
            if(input.value.trim() === '') {
                alert('Заполните поле имени.');
                return;
            }
            this.name = input.value;
            this.text = inputText.value;
            this.createElem();
            input.value = '';
            inputText.value = '';

        });

        this.ul = document.createElement('ul');
        this.ul.classList.add('content-list');
        container.append(this.ul);
        fetch('/notes', {
            method:'GET',
            headers: {'Content-Type':'application/json'},
        }).then(r => r.json()).then(r => {
            this.deactivateElement();
            if (r.status === 'ok') this.show(r.data);
        });

    }
    createElem() {
        let newNote = new Note(this.name, this.text);
        fetch('/notes', {
            method:'POST',
            headers: {'Content-Type':'application/json;charset=utf-8'},
            body: JSON.stringify({
                "name":this.name,
                "note":this.text
            }),
        }).then(r=>r.json()).then(r => {
            if (r.status === 'error') {
                alert('Ошибка при добавлении!');
                return;
            }

            fetch('/notes', {
                method:'GET',
                headers: {'Content-Type':'application/json'},
            }).then(r => r.json()).then(r => {
                this.deactivateElement();
                if (r.status === 'ok') this.show(r.data);
            });
        });
    }
    show(arr) {
        this.ul.innerHTML = '';
        if (!arr) return;
        arr.map((e, i) => {
            if(!e) return
            let li = document.createElement('li');
            li.classList.add('content-item');
            this.ul.append(li);

            let buttonShow = document.createElement('button');
            buttonShow.classList.add('content-item-name');
            buttonShow.innerHTML = e.name;
            li.append(buttonShow);

            li.addEventListener('click', (event) => {
                if (event.target.matches('.content-item-name-active')) return;
                if (e === this.activeElement) buttonShow.classList.add('content-item-name-active');
                this.activeElem(event.target);
            })
            if (e === this.activeElement) buttonShow.classList.add('content-item-name-active');
            li.dataset.index = i;

            this.ul.childNodes.forEach(e => {
                e.firstChild.classList.remove('content-item-name-active');
                if(e.dataset.index === this.index) e.firstChild.classList.add('content-item-name-active');
            });
        })
    }
    activeElem(event) {
        if(!event) return;
        fetch('/notes', {
            method:'GET',
            headers: {'Content-Type':'application/json'}
        }).then(r => r.json()).then(r => {
            if(r.status !== 'ok') return;
            this.index = event.parentNode.dataset.index;
            this.activeElement = r.data[this.index];
            this.ul.childNodes.forEach(e => {
                e.firstChild.classList.remove('content-item-name-active');
                if(e.dataset.index === this.index) e.firstChild.classList.add('content-item-name-active');
            });
            this.show(r.data);
            this.display();
        });
    }
    display() {
        if ((!this.activeElement) && document.querySelector(this.removeBlock)) {
            document.querySelector(this.removeBlock).style.display = 'none';
        }
        let menuNote;
        if (this.activeElement) {
            if (document.querySelector(this.removeBlock)) {
                document.querySelector(this.removeBlock).remove();
            }
            let getBlockApp = document.querySelector('.app');
            menuNote = new MenuNote(getBlockApp, this.index);
            menuNote.createMenu();
        }
    }
    deactivateElement() {
        let click = null;
        document.addEventListener('click', (event) => {
            click = event.target;
            if (!click.matches(`.${this.container}`)) return;
            this.activeElement = null;
            this.index = null;
            this.ul.childNodes.forEach(e => {
                e.firstChild.classList.remove('content-item-name-active');
            });
            if (document.querySelector('body .menu-note')) {
                document.querySelector('.menu-note').style.display = 'none';
            }
        })
    }
}

class MenuNote {
    constructor(blockInsert, index) {
        this.blockInsert = blockInsert;
        this.index = index;
    }
    createMenu() {
        let container = document.createElement('div');
        container.classList.add('menu-note');
        this.blockInsert.append(container);

        let input = document.createElement('div');
        input.classList.add('note-form', 'note-form__name');
        container.append(input);

        let textarea = document.createElement('div');
        textarea.classList.add('note-form', 'note-form__text');
        container.append(textarea);

        fetch('/notes', {
            method:'GET',
            headers: {'Content-Type':'application/json'},
        }).then(r => r.json()).then(r => {
            if (r.status !== 'ok') return;
            input.innerHTML = r.data[this.index].name;
            textarea.innerHTML = r.data[this.index].note;
        })
    }
}
class Note {
    constructor(name, note) {
        this.name = name;
        this.note = note;
    }
}