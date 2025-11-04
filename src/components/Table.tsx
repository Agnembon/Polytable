import { Cell } from '@/components/Cell.tsx';
import { useSelection } from '@/hooks/useSelection.ts';

interface SelectableTableProps {
  rows: number;
  columns: number;
}

export const Table = ({ rows, columns }: SelectableTableProps) => {
  const { selection, handleMouseDown, handleMouseEnter, handleMouseUp } = useSelection();

  return (
    <div onMouseUp={handleMouseUp} className="inline-block select-none">
      <table className="border-collapse shadow rounded-md overflow-hidden">
        <tbody>
          {Array.from({ length: rows }).map((_, row) => (
            <tr key={row}>
              {Array.from({ length: columns }).map((_, column) => (
                <Cell
                  key={column}
                  position={{ row, column }}
                  isSelected={selection?.contains({ row, column }) ?? false}
                  onMouseDown={handleMouseDown}
                  onMouseEnter={handleMouseEnter}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
