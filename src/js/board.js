export default class Board {
  constructor(cells) {
    this.cells = cells;
  }

  deleteActiveClass() {
    const item = this.cells.filter((el) =>
      el.classList.contains("cell_active"))[0];
    if (item) item.classList.remove("cell_active");
  }

  addActiveClass() {
    const randomCell = Math.floor(Math.random() * this.cells.length);
    const item = this.cells[randomCell];
    item.classList.add("cell_active");
  }
}
