import type { Cell } from '@/domain/vo/Cell';

export class SelectionRange {
  constructor(
    public readonly start: Cell,
    public readonly end: Cell
  ) {}

  contains(cell: Cell): boolean {
    return (
      cell.row >= this.topRow &&
      cell.row <= this.bottomRow &&
      cell.column >= this.leftColumn &&
      cell.column <= this.rightColumn
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
