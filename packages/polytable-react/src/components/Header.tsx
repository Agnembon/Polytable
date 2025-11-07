import type { CellValue } from "@/core/types";
import { HeaderCell } from "@/components/HeaderCell.tsx";

interface HeaderProps {
  columns: CellValue[];
}

export const Header = ({ columns }: HeaderProps) => (
  <thead>
    <tr>
      {columns.map((value) => (
        <HeaderCell value={value} />
      ))}
    </tr>
  </thead>
);
