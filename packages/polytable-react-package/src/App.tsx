import { Table } from "@/components/Table.tsx";
import type { CellValue } from "@/core/types";
import { useState } from "react";

export const App = () => {
  const columns: CellValue[] = ['HEADER-1', 'HEADER-2', 'HEADER-3', 'HEADER-4', 'HEADER-5', 'HEADER-6'];
  const rows: CellValue[][] = [[1, 2, 'POLYTABLE-3', 4, 5, 6], ['AGNEMBON-7', 'HOLA-8', 9, 10, 11, 12],
  [13, 14, 'PRUEBA-15', 16, 17, 18], [19, 20, 'PRUEBA-21', 22, 23, 24], [25, 26, 'PRUEBA-27', 28, 29, 30]];

  const [selectedData1, setSelectedData1] = useState<CellValue[][]>([]);

  return (
    <div className='p-4 flex flex-col items-center gap-30 min-h-screen'>
      <div className='flex flex-col items-center gap-10'>
        <h1 className='text-xl font-semibold mb-4'>POLYTABLE CON HEADER</h1>
        <Table
          key={'table'}
          shape={{ columns, rows }}
          onSelectionChange={setSelectedData1}
        />
        <p>{selectedData1.join(" - ")}</p>
      </div>
    </div>
  );
};
