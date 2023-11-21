/* eslint-disable no-unused-vars */
import Board from "./board";

const cells = Array.from(document.querySelectorAll(".cell"));

const board = new Board(cells);

document.addEventListener("DOMContentLoaded", () => {
  const interval = setInterval(() => {
    board.deleteActiveClass();
    board.addActiveClass();
  }, 1000);
});
