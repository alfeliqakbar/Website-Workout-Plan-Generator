import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import './components/navbar';
import './components/jumbotron';
import './components/carousel';
import '../styles/style.css';
import 'regenerator-runtime';
import App from './views/app';

const app = new App({
  content: document.querySelector('#content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
