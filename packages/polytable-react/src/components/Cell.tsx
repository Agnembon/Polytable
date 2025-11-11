import type { CellCoordinates, CellValue } from "@/types";

interface CellProps {
  value: CellValue;
  coordinates: CellCoordinates;
  isSelected: boolean;
  onMouseDown: (coordinates: CellCoordinates) => void;
  onMouseEnter: (coordinates: CellCoordinates) => void;
}

export const Cell = ({ value, coordinates, isSelected, onMouseDown, onMouseEnter }: CellProps) => (
  <td
    onMouseDown={() => onMouseDown(coordinates)}
    onMouseEnter={() => onMouseEnter(coordinates)}
    className={`min-w-30 px-3 py-2 cursor-pointer select-none ${
      isSelected ? 'bg-blue-200/60' : 'hover:bg-slate-200'
    }`}
  >
    {value}
  </td>
);
