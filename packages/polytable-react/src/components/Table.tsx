import { Cell } from './Cell/Cell.tsx';
import { useSelection } from '../hooks/useSelection.ts';
import type { CellValue, TableData } from '../types';
import { HeaderCell } from './Cell/HeaderCell.tsx';
import { useEffect } from 'react';

interface TableProps {
  data: TableData;
  onSelectedData: (selectedData: CellValue[][]) => void;
}

export const Table = ({ data, onSelectedData }: TableProps) => {
  const { selectionRange, selectedData, handleMouseDown, handleMouseEnter } = useSelection(data);
  const hasContent = data.content && data.content.length > 0;

  useEffect(() => {
    onSelectedData(selectedData);
  }, [selectedData])
 
  return (
    <div className='border-collapse rounded-md'>
      {hasContent
        ? (
          <table className='border-collapse rounded-md'>
            <thead>
              <tr key={'header-row'}>
                {data.header.map((headerValue: CellValue, headerIndex: number) => (
                  <HeaderCell key={headerIndex} value={headerValue} />
                ))}
              </tr>
            </thead>
            <tbody>
              {data.content.map((rowData: CellValue[], rowIndex: number) => (
                <tr key={rowIndex}>
                  {rowData.map((columnValue: CellValue, columnIndex: number) => (
                    <Cell
                      key={columnIndex}
                      value={columnValue}
                      position={{ row: rowIndex, column: columnIndex }}
                      isSelected={selectionRange?.contains({ row: rowIndex, column: columnIndex }) ?? false}
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
