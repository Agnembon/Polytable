import type { CellValue, TableShape } from "@/core/types";
import { useSelectionRange } from "@/hooks/useSelectionRange.ts";
import { Body } from "@/components/Body.tsx";
import { Header } from "@/components/Header.tsx";

interface Table {
  shape: TableShape;
  onSelectionChange?: (selectedCells: CellValue[][]) => void;
}

export const Table = ({ shape, onSelectionChange }: Table) => {
  const { selectionRange, handleMouseDown, handleMouseEnter } = useSelectionRange(shape.rows, onSelectionChange);

  return (
    <table className="border-collapse rounded-md">
      <Header columns={shape.columns} />
      <Body
        rows={shape.rows}
        selectionRange={selectionRange}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
      />
    </table>
  )
};
