import './style.css';
import Players from '../modules/items.js';

const players = new Players();
document.querySelector('#list-form')
  .addEventListener('submit', players.addPlayer);
document.querySelector('#refresh').addEventListener('click', () => {
  window.location.reload();
});
document.addEventListener('DOMContentLoaded', players.refreshScore);