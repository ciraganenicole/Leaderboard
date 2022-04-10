/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/User.js":
/*!*************************!*\
  !*** ./modules/User.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Score {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Score);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./modules/items.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _User_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.js */ "./modules/User.js");


const request = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
class Players {
    showPlayer = (userData) => {
      const player = document.querySelector('.container-list');
      const name = document.createElement('li');

      name.innerHTML += `
  <span class="user">${userData.user}</span>:<span class="score">${userData.score}</span>
  `;
      player.appendChild(name);
    }

    addPlayer = (e) => {
      e.preventDefault();
      const user = document.querySelector('#name').value;
      const score = document.querySelector('#score').value;

      if (user && score) {
        const playerData = new _User_js__WEBPACK_IMPORTED_MODULE_0__["default"](user, score);
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

    refreshScore = () => {
      fetch(`${request}UDkOGtyqoUJP8qpdFWU9/scores/`)
        .then((response) => response.json())
        .then((playerData) => {
          const list = document.querySelector('.container-list');
          list.replaceChildren();
          playerData.result.forEach((score) => this.showPlayer(score));
        });
      return this.refreshScore;
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Players);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLEtBQUs7Ozs7OztVQ1BwQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTjhCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLGNBQWMsOEJBQThCLGVBQWU7QUFDbEY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCLGdEQUFLO0FBQ3BDLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxnQkFBZ0I7O0FBRTFEO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsZ0NBQWdDLGFBQWE7QUFDN0MsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvLi9tb2R1bGVzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2xlYWRlcmJvYXJkL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbGVhZGVyYm9hcmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL21vZHVsZXMvaXRlbXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2NvcmUge1xuICBjb25zdHJ1Y3Rvcih1c2VyLCBzY29yZSkge1xuICAgIHRoaXMudXNlciA9IHVzZXI7XG4gICAgdGhpcy5zY29yZSA9IHNjb3JlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNjb3JlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFNjb3JlIGZyb20gJy4vVXNlci5qcyc7XG5cbmNvbnN0IHJlcXVlc3QgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1qcy1jYXBzdG9uZS1iYWNrZW5kLmNsb3VkZnVuY3Rpb25zLm5ldC9hcGkvZ2FtZXMvJztcbmNsYXNzIFBsYXllcnMge1xuICAgIHNob3dQbGF5ZXIgPSAodXNlckRhdGEpID0+IHtcbiAgICAgIGNvbnN0IHBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItbGlzdCcpO1xuICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICAgIG5hbWUuaW5uZXJIVE1MICs9IGBcbiAgPHNwYW4gY2xhc3M9XCJ1c2VyXCI+JHt1c2VyRGF0YS51c2VyfTwvc3Bhbj46PHNwYW4gY2xhc3M9XCJzY29yZVwiPiR7dXNlckRhdGEuc2NvcmV9PC9zcGFuPlxuICBgO1xuICAgICAgcGxheWVyLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgIH1cblxuICAgIGFkZFBsYXllciA9IChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCB1c2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKS52YWx1ZTtcbiAgICAgIGNvbnN0IHNjb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Njb3JlJykudmFsdWU7XG5cbiAgICAgIGlmICh1c2VyICYmIHNjb3JlKSB7XG4gICAgICAgIGNvbnN0IHBsYXllckRhdGEgPSBuZXcgU2NvcmUodXNlciwgc2NvcmUpO1xuICAgICAgICB0aGlzLmdhbWVzKGAke3JlcXVlc3R9VURrT0d0eXFvVUpQOHFwZEZXVTkvc2NvcmVzL2AsIHBsYXllckRhdGEpLnRoZW4oXG4gICAgICAgICAgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UnKTtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICBtZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICAgIG1lc3NhZ2UuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsb3NlXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2xvc2VcIj48L2k+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj4ke3Jlc3BvbnNlLnJlc3VsdH08L3NwYW4+IGA7XG5cbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgdGhpcy5zaG93UGxheWVyKHsgdXNlciwgc2NvcmUgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBtZXNzYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudFxuICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLm1lc3NhZ2UgLmNsb3NlJylcbiAgICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIG1lc3NhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmNsZWFySW5wdXRzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVmcmVzaFNjb3JlID0gKCkgPT4ge1xuICAgICAgZmV0Y2goYCR7cmVxdWVzdH1VRGtPR3R5cW9VSlA4cXBkRldVOS9zY29yZXMvYClcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC50aGVuKChwbGF5ZXJEYXRhKSA9PiB7XG4gICAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItbGlzdCcpO1xuICAgICAgICAgIGxpc3QucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgICAgcGxheWVyRGF0YS5yZXN1bHQuZm9yRWFjaCgoc2NvcmUpID0+IHRoaXMuc2hvd1BsYXllcihzY29yZSkpO1xuICAgICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLnJlZnJlc2hTY29yZTtcbiAgICB9XG5cbiAgICBnYW1lcyA9IGFzeW5jIChyZXF1ZXN0ID0gJycsIHBsYXllckRhdGEgPSB7fSkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChyZXF1ZXN0LCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGxheWVyRGF0YSksXG4gICAgICB9KTtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfVxuXG4gICAgY2xlYXJJbnB1dHMgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmFtZScpLnZhbHVlID0gJyc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2NvcmUnKS52YWx1ZSA9ICcnO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=