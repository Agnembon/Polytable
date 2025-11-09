import { Table } from "@polytable/react-package";
import type { CellValue } from "@polytable/react-package";

export const App = () => {
  const columns = ["A", "B", "C"];
  const rows = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

  return (
    <Table
      shape={{ columns, rows }}
      onSelectionChange={(selection: CellValue[][]) => console.log(selection)}
    />
  );
};
