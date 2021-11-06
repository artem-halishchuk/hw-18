import '../styles/main.css'; //импортим стили
import MenuMain from '../app/menuMain';

document.addEventListener('DOMContentLoaded', function() {
    let getBlockApp = document.querySelector('.app');
    new MenuMain(getBlockApp, '.menu-note', 'menu-main');
})


