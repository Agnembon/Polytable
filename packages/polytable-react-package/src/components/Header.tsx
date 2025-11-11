import type { CellValue } from "@/core/types";
import { HeaderCell } from "@/components/HeaderCell";
import type { Key } from "react";

interface HeaderProps {
  key: Key;
  cells: CellValue[];
}

export const Header = ({ key, cells }: HeaderProps) => (
  <thead key={`header-${key}`}>
    <tr key={`header-cells-${key}`}>
      {cells.map((value: CellValue, index: number) => (
        <HeaderCell key={index} value={value} />
      ))}
    </tr>
  </thead>
);
