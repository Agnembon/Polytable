import type { CellValue } from "@/types";

export interface SelectionBounds {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export const extractValuesWithinSelectionBounds = (content: CellValue[][], selectionBounds: SelectionBounds): CellValue[][] => {
  const values: CellValue[][] = [];

  for (let rowIndex = selectionBounds.top; rowIndex <= selectionBounds.bottom; rowIndex++) {
    const row = content[rowIndex];
    if (!row) continue;

    values.push(row.slice(selectionBounds.left, selectionBounds.right + 1));
  }

  return values;
}
