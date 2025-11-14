import type { CellValue, TableShape } from "@/core/types";
import { Normalizer } from "@/core/Normalizer";
import { useSelectionRange } from "@/hooks/useSelectionRange";
import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import { useMemo } from "react";

interface TableProps {
  shape: TableShape;
  onSelectionChange?: (cells: CellValue[][]) => void;
}

export const Table = ({ shape, onSelectionChange }: TableProps) => {
  const normalizer = useMemo(
    () => new Normalizer(), 
    []
  );
  const rows = useMemo(
    () => normalizer.columnsToRows(shape.data),
    [shape.data, normalizer]
  );
  const { selectionRange, handleMouseDown, handleMouseEnter } = useSelectionRange(rows, onSelectionChange);

  return (
    <table className="border-separate border-spacing-0 rounded-xl overflow-hidden text-sm text-gray-800 bg-white shadow-sm">
      <Header cells={Object.keys(shape.data)} />
      <Body
        rows={rows}
        selectionRange={selectionRange}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
      />
    </table>
  );
};
