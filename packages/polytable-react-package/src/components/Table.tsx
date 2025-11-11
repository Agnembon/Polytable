import type { CellValue, TableShape } from "@/core/types";
import { useSelectionRange } from "@/hooks/useSelectionRange";
import { Body } from "@/components/Body";
import { Header } from "@/components/Header";
import type { Key } from "react";

interface Table {
  key: Key;
  shape: TableShape;
  onSelectionChange?: (selectedCells: CellValue[][]) => void;
}

export const Table = ({ key, shape, onSelectionChange }: Table) => {
  const { selectionRange, handleMouseDown, handleMouseEnter } = useSelectionRange(shape.rows, onSelectionChange);

  return (
    <table key={key} className="border-collapse rounded-md">
      <Header key={key} cells={shape.columns} />
      <Body
        key={key}
        rows={shape.rows}
        selectionRange={selectionRange}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
      />
    </table>
  )
};
