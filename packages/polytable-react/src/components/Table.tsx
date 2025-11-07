import type { CellValue, TableDefinition } from "@/types";
import { useSelection } from "@/hooks/useSelection";
import { Body } from "@/components/Body.tsx";
import { Header } from "@/components/Header.tsx";

interface TableProps {
  table: TableDefinition;
  onSelectionChange?: (selectedCells: CellValue[][]) => void;
}

export const Table = ({ table, onSelectionChange }: TableProps) => {
  const { selectionRange, handleMouseDown, handleMouseEnter } = useSelection(table, onSelectionChange);

  return (
    <table className="border-collapse rounded-md">
      <Header cells={table.header} />
      <Body
        content={table.content}
        selectionRange={selectionRange}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
      />
    </table>
  )
};
