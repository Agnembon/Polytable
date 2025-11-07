export type CellValue = string | number;

export interface CellCoordinates {
  row: number;
  column: number;
}

export interface TableDefinition {
  header: CellValue[];
  content: CellValue[][];
}
