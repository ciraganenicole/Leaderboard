import Score from './User.js';

const request = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
class Players {
    showPlayer = (userData) => {
      const player = document.querySelector('.container-list');
      const name = document.createElement('li');

      name.innerHTML += `
  <span>${userData.user}  </span><span>${userData.score}</span>
  `;
      player.appendChild(name);
    }

    addPlayer = (e) => {
      e.preventDefault();
      const user = document.querySelector('#name').value;
      const score = document.querySelector('#score').value;

      if (user && score) {
        const playerData = new Score(user, score);
        this.games(`${request}UDkOGtyqoUJP8qpdFWU9/scores/`, playerData).then(
          (response) => {
            const message = document.querySelector('.message');
            if (response) {
              message.style.display = 'flex';
              message.innerHTML = `
                     <div class="close"><i class="fas fa-close"></i></div>
                     <span class="text">${response.result}</span> `;

              setTimeout(() => {
                message.style.display = 'none';
              }, 2000);
              this.showPlayer({ user, score });
            } else {
              message.style.display = 'none';
            }
            document
              .querySelector('.message .close')
              .addEventListener('click', () => {
                message.style.display = 'none';
              });
          },
        );

        this.clearInputs();
      }
    }

    refreshScore = (e) => {
      e.preventDefault();
      fetch(`${request}UDkOGtyqoUJP8qpdFWU9/scores/`)
        .then((response) => response.json())
        .then((playerData) => {
          const list = document.querySelector('.container-list');
          list.replaceChildren();
          playerData.result.forEach((score) => Players.initialize(score));
        });
    }

    games = async (request = '', playerData = {}) => {
      const response = await fetch(request, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(playerData),
      });
      return response.json();
    }

    clearInputs = () => {
      document.querySelector('#name').value = '';
      document.querySelector('#score').value = '';
    }
}

export default Players;