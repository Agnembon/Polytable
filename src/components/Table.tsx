import { useState, useRef } from 'react';
import { SelectionRange } from '@/domain/model/SelectionRange';
import type { Cell } from '@/domain/vo/Cell';

interface SelectableTableProps {
  rows: number;
  columns: number;
}

export const Table = ({ rows, columns }: SelectableTableProps) => {
  const [selection, setSelection] = useState<SelectionRange | null>(null);
  const [isSelecting, setIsSelecting] = useState<boolean>(false);
  const startRef = useRef<Cell | null>(null);

  const handleMouseDown = (cellPosition: Cell) => {
    startRef.current = cellPosition;
    setSelection(new SelectionRange(cellPosition, cellPosition));
    setIsSelecting(true);
  };

  const handleMouseEnter = (cellPosition: Cell) => {
    if (isSelecting && startRef.current) {
      setSelection(new SelectionRange(startRef.current, cellPosition));
    }
  };

  const handleMouseUp = () => {
    setIsSelecting(false);
    startRef.current = null;
  };

  return (
    <div
      onMouseUp={handleMouseUp}
      style={{ userSelect: 'none', display: 'inline-block', borderCollapse: 'collapse' }}
    >
      <table style={{ borderCollapse: 'collapse' }}>
        <tbody>
          {Array.from({ length: rows }).map((_, row) => (
            <tr key={row}>
              {Array.from({ length: columns }).map((_, column) => {
                const isSelected = selection?.contains({ row, column }) ?? false;
                return (
                  <td
                    key={column}
                    onMouseDown={() => handleMouseDown({ row, column })}
                    onMouseEnter={() => handleMouseEnter({ row, column })}
                    style={{
                      width: 60,
                      height: 30,
                      border: '1px solid #ccc',
                      textAlign: 'center',
                      cursor: 'pointer',
                      backgroundColor: isSelected ? '#b3d4fc' : 'white'
                    }}
                  >
                    {row},{column}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
