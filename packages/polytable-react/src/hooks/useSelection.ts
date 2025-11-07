import { useEffect, useRef, useState } from "react";
import type { CellCoordinates, CellValue, TableDefinition } from "@/types";
import { extractValuesWithinSelectionBounds } from "@/models/SelectionBounds.ts";
import { SelectionRange } from "@/models/SelectionRange.ts";

export function useSelection(table?: TableDefinition, onSelection?: (values: CellValue[][]) => void) {
  const [selectionRange, setSelectionRange] = useState<SelectionRange | null>(null);
  const isSelecting = useRef(false);

  useEffect(() => {
    const onMouseUp = () => {
      if (!isSelecting.current || !selectionRange || !table) {
        return;
      }

      isSelecting.current = false;

      const selectionBounds = selectionRange.selectionBounds();
      const values = extractValuesWithinSelectionBounds(table.content, selectionBounds);

      onSelection?.(values);
    }

    window.addEventListener("mouseup", onMouseUp)
    return () => window.removeEventListener("mouseup", onMouseUp)
  });

  const handleMouseDown = (position: CellCoordinates) => {
    isSelecting.current = true;
    setSelectionRange(new SelectionRange(position, position));
  }

  const handleMouseEnter = (position: CellCoordinates) => {
    if (!isSelecting.current || !selectionRange) {
      return;
    }

    setSelectionRange(selectionRange.withEnd(position));
  }

  return { selectionRange, handleMouseDown, handleMouseEnter };
}
