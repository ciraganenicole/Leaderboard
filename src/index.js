import './style.css';
import Players from '../modules/items';

const players = new Players();
document.querySelector('.refresh').addEventListener('click', Players.refreshScore);
document.querySelector('#list-form')
  .addEventListener('submit', players.addPlayer);
document.addEventListener('DOMContentLoaded', Players.refreshScore);