/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/board.js
class Board {
  constructor(cells) {
    this.cells = cells;
  }
  deleteActiveClass() {
    const item = this.cells.filter(el => el.classList.contains("cell_active"))[0];
    if (item) item.classList.remove("cell_active");
  }
  addActiveClass() {
    const randomCell = Math.floor(Math.random() * this.cells.length);
    const item = this.cells[randomCell];
    item.classList.add("cell_active");
  }
}
;// CONCATENATED MODULE: ./src/js/app.js
/* eslint-disable no-unused-vars */

const cells = Array.from(document.querySelectorAll(".cell"));
const board = new Board(cells);
document.addEventListener("DOMContentLoaded", () => {
  const interval = setInterval(() => {
    board.deleteActiveClass();
    board.addActiveClass();
  }, 1000);
});
;// CONCATENATED MODULE: ./src/index.js


/******/ })()
;