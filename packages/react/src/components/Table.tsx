import { Cell } from './Cell/Cell.tsx';
import { useSelection } from '../hooks/useSelection.ts';
import type { CellValue, TableData } from '../types';
import { HeaderCell } from './Cell/HeaderCell.tsx';

interface TableProps {
  data: TableData;
}

export const Table = ({ data }: TableProps) => {
  const { selection, handleMouseDown, handleMouseEnter } = useSelection();
  const hasHeader = data.header && data.header.length > 0;
  const hasContent = data.content && data.content.length > 0;

  return (
    <div className='border-collapse rounded-md'>
      {hasContent
        ? (
          <table className='border-collapse rounded-md'>
            {hasHeader && (
              <thead>
                <tr key={'header-row'}>
                  {data.header.map((headerValue: CellValue, headerIndex: number) => (
                    <HeaderCell key={headerIndex} value={headerValue} />
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {data.content.map((rowData: CellValue[], rowIndex: number) => (
                <tr key={rowIndex}>
                  {rowData.map((columnValue: CellValue, columnIndex: number) => (
                    <Cell
                      key={columnIndex}
                      value={columnValue}
                      position={{ row: rowIndex, column: columnIndex }}
                      isSelected={selection?.contains({ row: rowIndex, column: columnIndex }) ?? false}
                      onMouseDown={handleMouseDown}
                      onMouseEnter={handleMouseEnter}
                    />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )
        : <div className='text-gray-500 text-center p-4 italic'>No hay datos disponibles</div>}
    </div>
  );
};
