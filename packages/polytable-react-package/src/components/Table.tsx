import { useMemo } from "react";
import type { CellValue, TableShape } from "@/core/types";
import { useSelectionRange } from "@/hooks/useSelectionRange";
import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import { transposeColumns } from "@/utilities/transposeColumns";

interface TableProps {
  shape: TableShape;
  onSelectionChange?: (cells: CellValue[][]) => void;
}

export const Table = ({ shape, onSelectionChange }: TableProps) => {
  const rows = useMemo(() => transposeColumns(shape.columns), [shape.columns]);
  const { selectionRange, handleMouseDown, handleMouseEnter } = useSelectionRange(rows, onSelectionChange);

  return (
    <table className="border-separate border-spacing-0 rounded-xl overflow-hidden text-sm text-gray-800 bg-white shadow-sm">
      <Header cells={Object.keys(shape.columns)} />
      <Body
        rows={rows}
        selectionRange={selectionRange}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
      />
    </table>
  );
};
