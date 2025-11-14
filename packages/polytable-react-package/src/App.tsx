import { Table } from "@/components/Table.tsx";
import type { CellValue, TableShape } from "@/core/types";
import { useState } from "react";

export const App = () => {

  const columns: TableShape = {
    data: {
      'HEADER-1': [1, 'AGNEMBON_7', 13, 19, 25], 
      'HEADER-2': [14, 'HOLA-8', 14, 20, 26],
      'HEADER-3': ['POLYTABLE_3', 9, 'PRUEBA_15', 'PRUEBA_21', 'PRUEBA_27'], 
      'HEADER-4': [4, 10, 16, 22, 28], 
      'HEADER-5': [5, 11, 17, 23, 29], 
      'HEADER-6': [6, 12, 18, 24, 30],
    }
  }

  const [selectedData1, setSelectedData1] = useState<CellValue[][]>([]);

  return (
    <div className='p-4 flex flex-col items-center gap-30 min-h-screen'>
      <div className='flex flex-col items-center gap-10'>
        <h1 className='text-xl font-semibold mb-4'>POLYTABLE CON HEADER</h1>
        <Table
          key={'table'}
          shape={columns}
          onSelectionChange={setSelectedData1}
        />
        <p>{selectedData1.join(" - ")}</p>
      </div>
    </div>
  );
};
