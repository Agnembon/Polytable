import type { CellPosition } from '@/types';

interface CellProps {
  position: CellPosition;
  isSelected: boolean;
  onMouseDown: (cell: CellPosition) => void;
  onMouseEnter: (cell: CellPosition) => void;
}

export const Cell = ({ position, isSelected, onMouseDown, onMouseEnter }: CellProps) => (
  <td
    onMouseDown={() => onMouseDown(position)}
    onMouseEnter={() => onMouseEnter(position)}
    className={`w-16 h-8 border border-gray-300 text-center cursor-pointer select-none ${
      isSelected ? 'bg-blue-200' : 'bg-white hover:bg-gray-100'
    }`}
  >
    {position.row},{position.column}
  </td>
);
