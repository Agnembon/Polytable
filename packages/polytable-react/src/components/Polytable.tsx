import type { CellValue, Table } from "@/types";
import { useSelection } from "@/hooks/useSelection";
import { computeSelectionBounds, isWithinSelectionBounds } from "@/models/SelectionBounds.ts";
import { HeaderCell } from "@/components/HeaderCell";
import { Cell } from "@/components/Cell";

interface PolytableProps {
  data: Table;
  onSelectionChange?: (selectedData: CellValue[][]) => void;
}

export const Polytable = ({data, onSelectionChange}: PolytableProps) => {
  const { selectionRange, handleMouseDown, handleMouseEnter } = useSelection(data, onSelectionChange);
  const bounds = selectionRange ? computeSelectionBounds(selectionRange.start, selectionRange.end) : null;

  return (
    <table className="border-collapse rounded-lg overflow-hidden shadow-sm text-sm text-gray-700">
      {data.header && data.header.length > 0 && (
        <thead className="bg-indigo-200">
          <tr>
            {data.header.map((value, index) => (
              <HeaderCell key={index} value={value} />
            ))}
          </tr>
        </thead>
      )}

      <tbody>
      {data.content.map((row, rowIndex) => (
        <tr key={rowIndex} className={`${rowIndex % 2 > 0 ? "bg-slate-100" : "" }`}>
          {row.map((value, columnIndex) => {
            const position = { row: rowIndex, column: columnIndex };
            const isSelected = bounds ? isWithinSelectionBounds(position, bounds) : false;

            return (
              <Cell
                key={columnIndex}
                value={value}
                coordinates={position}
                isSelected={isSelected}
                onMouseDown={handleMouseDown}
                onMouseEnter={handleMouseEnter}
              />
            );
          })}
        </tr>
      ))}
      </tbody>
    </table>
  );
};
