// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Иконки (если нужны)
import 'bootstrap-icons/font/bootstrap-icons.css';

// JS-зависимости (порядок важен)
import $ from 'jquery';
window.$ = window.jQuery = $;
import 'popper.js';
import 'bootstrap';
// Твои стили поверх Bootstrap
import '../styles/main.scss'; // один уровень вверх
import '../src/style.css'; // один уровень вверх
import './open-close'
import './swiper'