import { Table } from './components/Table';
import type { CellValue } from './types';

export const App = () => {
  const temporalHeaderDataExample: CellValue[] = ['HEADER-1', 'HEADER-2', 'HEADER-3', 'HEADER-4', 'HEADER-5', 'HEADER-6'];
  const temporalContentDataExample: CellValue[][] = [
    [1, 2, 'POLYGRID-3', 4, 5, 6],
    ['AGNEMBON-7', 'HOLA-8', 9, 10, 11, 12],
    [13, 14, 'PRUEBA-15', 16, 17, 18],
    [19, 20, 'PRUEBA-21', 22, 23, 24],
    [25, 26, 'PRUEBA-27', 28, 29, 30]
  ];


  return (
    <div className='p-4 flex flex-col items-center gap-30 min-h-screen'>
      <div className='flex flex-col items-center gap-10'>
        <h1 className='text-xl font-semibold mb-4'>POLYGRID CON HEADER</h1>
        <Table
          key={'polygrid-header'}
          data={{ header: temporalHeaderDataExample, content: temporalContentDataExample }}
        />
      </div>

      <div className='flex flex-col items-center gap-10'>
        <h1 className='text-xl font-semibold mb-4'>POLYGRID SIN HEADER</h1>
        <Table key={'polygrid'} data={{ header: [], content: temporalContentDataExample }} />
      </div>
    </div>
  );
};
