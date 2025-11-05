import type { CellPosition } from '../types';

export class SelectionRange {
  constructor(public start: CellPosition, public end: CellPosition) {}

  withEnd(end: CellPosition): boolean {
    if (this.end.row === end.row && this.end.column === end.column) {
      return false;
    }

    this.end = end;
    return true;
  }

  contains(cell: CellPosition): boolean {
    return (
      cell.row >= Math.min(this.start.row, this.end.row) &&
      cell.row <= Math.max(this.start.row, this.end.row) &&
      cell.column >= Math.min(this.start.column, this.end.column) &&
      cell.column <= Math.max(this.start.column, this.end.column)
    );
  }
}
