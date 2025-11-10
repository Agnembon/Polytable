export type CellValue = string | number;

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
  columns: CellValue[];
  rows: CellValue[][];
}
