import type { ColumnData, ColumnName } from "@/core/types";

export const transposeColumns = (columns: Record<ColumnName, ColumnData>) => {
  const columnValues = Object.values(columns);

  if (columnValues.length === 0) return [];

  const rowCount = columnValues[0].length;

  if (!columnValues.every(column => column.length === rowCount)) {
    throw new Error("All columns must have the same number of rows.");
  }

  return Array.from({ length: rowCount }, (_, rowIndex) => columnValues.map(column => column[rowIndex]));
}