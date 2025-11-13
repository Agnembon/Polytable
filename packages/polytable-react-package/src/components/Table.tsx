import type { CellValue, TableShape } from "@/core/types";
import { useSelectionRange } from "@/hooks/useSelectionRange";
import { Body } from "@/components/Body";
import { Header } from "@/components/Header";

interface TableProps {
  shape: TableShape;
  onSelectionChange?: (cells: CellValue[][]) => void;
}

export const Table = ({ shape, onSelectionChange }: TableProps) => {
  const { selectionRange, handleMouseDown, handleMouseEnter } = useSelectionRange(shape.rows, onSelectionChange);

  return (
    <table className="border-separate border-spacing-0 rounded-xl overflow-hidden text-sm text-gray-800 bg-white shadow-sm">
      <Header cells={shape.columns} />
      <Body
        rows={shape.rows}
        selectionRange={selectionRange}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
      />
    </table>
  );
};
