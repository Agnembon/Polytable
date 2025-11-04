import type { CellPosition } from '@/types';

export class SelectionRange {
  constructor(
    public start: CellPosition,
    public end: CellPosition
  ) {}

  updateEnd(end: CellPosition): boolean {
    if (this.end.row === end.row && this.end.column === end.column) {
      return false;
    }

    this.end = end;
    return true;
  }

  contains(cell: CellPosition): boolean {
    return (
      cell.row >= this.topRow &&
      cell.row <= this.bottomRow &&
      cell.column >= this.leftColumn &&
      cell.column <= this.rightColumn
    );
  }

  equals(other: SelectionRange): boolean {
    return (
      this.start.row === other.start.row &&
      this.start.column === other.start.column &&
      this.end.row === other.end.row &&
      this.end.column === other.end.column
    );
  }

  private get topRow(): number {
    return Math.min(this.start.row, this.end.row);
  }

  private get bottomRow(): number {
    return Math.max(this.start.row, this.end.row);
  }

  private get leftColumn(): number {
    return Math.min(this.start.column, this.end.column);
  }

  private get rightColumn(): number {
    return Math.max(this.start.column, this.end.column);
  }
}
