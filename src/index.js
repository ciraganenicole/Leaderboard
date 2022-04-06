import './style.css';
import Player from '../modules/items.js';

class Players {
  constructor() {
    this.players = [];
  }

  initialize() {
    const dataString = localStorage.getItem('playerData');
    if (dataString) {
      this.players = JSON.parse(dataString).map((player) => new Player(player.name, player.score));
      this.setHtml();
    }
  }

  newPlayer(name, score) {
    const player = new Player(name, score);
    this.players.push(player);
    localStorage.setItem('playerData', JSON.stringify(this.players));
    this.setHtml();
    return player;
  }

  getPlayerList() {
    let containerHtml = '';
    this.players.forEach((player) => {
      containerHtml += player.getHtml();
    });
    return containerHtml;
  }

  setHtml() {
    const container = document.querySelector('.container-list');
    container.innerHTML = this.getPlayerList();
  }
}
const playerRepo = new Players();

playerRepo.initialize();