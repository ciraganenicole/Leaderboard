export default class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  getHtml() {
    return `<ul class="player">
     <li class="list">${this.name} : 
     ${this.score}</li>
     </ul>`;
  }
}