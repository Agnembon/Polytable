import type { CellCoordinates, CellValue } from '@/core/types';
import type { Key } from "react";

interface CellProps {
  key: Key;
  value: CellValue;
  coordinates: CellCoordinates;
  isSelected: boolean;
  onMouseDown: (coordinates: CellCoordinates) => void;
  onMouseEnter: (coordinates: CellCoordinates) => void;
}

export const Cell = ({ key, value, coordinates, isSelected, onMouseDown, onMouseEnter }: CellProps) => (
  <td
    key={key}
    onMouseDown={() => onMouseDown(coordinates)}
    onMouseEnter={() => onMouseEnter(coordinates)}
    className={`min-w-30 px-3 py-2 cursor-pointer select-none ${
      isSelected ? 'bg-blue-200/60' : 'hover:bg-slate-200'
    }`}
  >
    {value}
  </td>
);
