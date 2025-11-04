import { Table } from './components/Table';
import type { TableData } from './types';

export const App = () => {
  const temporalDataExample: TableData[][] = [
    [{ cellValue: 1 }, { cellValue: 2 }, { cellValue: "POLYGRID-3" }, { cellValue: 4 }, { cellValue: 5 }, { cellValue: 6 }],
    [{ cellValue: "AGNEMBON-7" }, { cellValue: "HOLA-8" }, { cellValue: 9 }, { cellValue: 10 }, { cellValue: 11 }],
    [{ cellValue: 12 }, { cellValue: 13 }, { cellValue: "PRUEBA-14" }, { cellValue: 15 }, { cellValue: 16 }],
    [{ cellValue: 17 }, { cellValue: 18 }, { cellValue: "PRUEBA-19" }, { cellValue: 20 }, { cellValue: 21 }, { cellValue: 22 }],
    [{ cellValue: 23 }, { cellValue: 24 }, { cellValue: "PRUEBA-25" }, { cellValue: 26 }, { cellValue: 27 }, { cellValue: 28 }],
  ];

  return (
    <div className="p-4 flex flex-col items-center gap-10 min-h-screen">
      <h1 className="text-xl font-semibold mb-4">POLYGRID</h1>
      <Table data={temporalDataExample} />
    </div>
  )
};
