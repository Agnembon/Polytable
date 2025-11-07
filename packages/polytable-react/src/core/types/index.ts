export type CellValue = string | number;

export interface CellCoordinates {
  row: number;
  column: number;
}

export interface TableShape {
  columns: CellValue[];
  rows: CellValue[][];
}
