import type { CellValue } from "@/core/types";

export class Normalizer {

  columnsToRows(columns: Record<CellValue, CellValue[]>): CellValue[][] {
      const columnValues = Object.values(columns);
      const rows: CellValue[][] = [];

      for (let row = 0; row < columnValues[0]?.length; row++) {
        const rowAux: CellValue[] = [];

        for (const col of columnValues) {
          rowAux.push(col[row]);
        }

        rows.push(rowAux);
      }

      return rows;
  }
}