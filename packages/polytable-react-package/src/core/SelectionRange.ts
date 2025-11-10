import type { CellCoordinates, CellValue, SelectionBounds } from "@/core/types";

export class SelectionRange {

  constructor(public readonly start: CellCoordinates, public readonly end: CellCoordinates) {}

  withEnd(end: CellCoordinates): SelectionRange {
    return new SelectionRange(this.start, end);
  }

  contains(cell: CellCoordinates): boolean {
    const selectionBounds = this.selectionBounds;

    return (
      cell.row >= selectionBounds.top &&
      cell.row <= selectionBounds.bottom &&
      cell.column >= selectionBounds.left &&
      cell.column <= selectionBounds.right
    );
  }

  pick(rows: CellValue[][]): CellValue[][] {
    const { top, bottom, left, right } = this.selectionBounds;
    const values: CellValue[][] = [];

    for (let rowIndex = top; rowIndex <= bottom; rowIndex++) {
      const row = rows[rowIndex];
      if (!row) continue;

      values.push(row.slice(left, right + 1));
    }

    return values;
  }

  private get selectionBounds(): SelectionBounds {
    return {
      top: Math.min(this.start.row, this.end.row),
      bottom: Math.max(this.start.row, this.end.row),
      left: Math.min(this.start.column, this.end.column),
      right: Math.max(this.start.column, this.end.column)
    };
  }

}