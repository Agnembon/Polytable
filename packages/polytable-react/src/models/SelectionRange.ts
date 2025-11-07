import type { CellCoordinates } from "@/types";
import type { SelectionBounds } from "@/models/SelectionBounds.ts";

export class SelectionRange {

  constructor(public readonly start: CellCoordinates, public readonly end: CellCoordinates) {}

  withEnd(end: CellCoordinates): SelectionRange {
    return new SelectionRange(this.start, end);
  }

  selectionBounds(): SelectionBounds {
    return {
      top: Math.min(this.start.row, this.end.row),
      bottom: Math.max(this.start.row, this.end.row),
      left: Math.min(this.start.column, this.end.column),
      right: Math.max(this.start.column, this.end.column)
    };
  }

  contains(cell: CellCoordinates): boolean {
    const selectionBounds = this.selectionBounds();

    return (
      cell.row >= selectionBounds.top &&
      cell.row <= selectionBounds.bottom &&
      cell.column >= selectionBounds.left &&
      cell.column <= selectionBounds.right
    );
  }

}