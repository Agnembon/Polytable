import { Cell } from '@/components/Cell.tsx';
import { useSelection } from '@/hooks/useSelection.ts';
import type { TableData } from '@/types';

interface TableProps {
  data: TableData[][];
}

export const Table = ({ data }: TableProps) => {
  const { selection, handleMouseDown, handleMouseEnter, handleMouseUp } = useSelection();
  const hasData = data && data.length > 0;

  return (
    <div onMouseUp={handleMouseUp} className="border-collapse shadow rounded-md overflow-hidden">
      {hasData ? (
        <table className="border-collapse shadow rounded-md overflow-hidden">
          <tbody>
            {data.map((rowData: TableData[], rowIndex: number) => (
              <tr key={rowIndex}>
                {rowData.map((columnValue: TableData, columnIndex: number) => (
                  <Cell
                    key={columnIndex}
                    value={columnValue.cellValue}
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
      ) : (
        <div className="text-gray-500 text-center p-4 italic">
          No hay datos disponibles
        </div>
      )}
    </div>
  );
};
