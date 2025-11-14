export type CellValue = string | number;
export type ColumnName = string;
export type ColumnData = CellValue[];

export interface CellCoordinates {
  row: number;
  column: number;
}

export interface SelectionBounds {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface TableShape {
  columns: Record<ColumnName, ColumnData>;
}
