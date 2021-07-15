import Cell from "./cell";
import { ArrayLike } from "./types";

export default class Row extends ArrayLike<Cell> {
  constructor(cells: Cell[] = []) {
    super(cells);
  }

  toString() {
    return '  R(\n' + this.elements.map((curr) => {
      return curr.toString();
    }).reduce((prev, curr) => {
      return `${prev}\n${curr}`;
    }) + '\n  )\n';
  }
}
