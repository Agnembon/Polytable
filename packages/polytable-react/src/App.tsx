import { Table } from "@/components/Table.tsx";
import type { CellValue } from "@/core/types";

export const App = () => {
  const columns: CellValue[] = ["A", "B", "C"];
  const rows: CellValue[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  return (
    <Table shape={{ columns, rows }} />
  );
};
