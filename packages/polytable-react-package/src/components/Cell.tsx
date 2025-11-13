import type { CellCoordinates, CellValue } from "@/core/types";

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
    className={`px-4 py-2 select-none cursor-pointer border-b border-gray-100 transition-colors duration-75 ${isSelected
      ? "bg-indigo-100/40"
      : "hover:bg-gray-100"
    }`}
  >
    {value}
  </td>
);
