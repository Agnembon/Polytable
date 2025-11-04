export interface TableData {
  header: CellValue[];
  content: CellValue[][];
}

export type CellValue = string | number;

export interface CellPosition {
  row: number;
  column: number;
}
