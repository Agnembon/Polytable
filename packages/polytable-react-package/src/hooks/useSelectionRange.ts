import { useEffect, useRef, useState } from "react";
import type { CellCoordinates, CellValue } from "@/core/types";
import { SelectionRange } from "@/core/SelectionRange";

export const useSelectionRange = (body?: CellValue[][], onSelection?: (values: CellValue[][]) => void) => {
  const [selectionRange, setSelectionRange] = useState<SelectionRange | null>(null);
  const isSelecting = useRef(false);

  useEffect(() => {
    const handleMouseUp = () => {
      if (!isSelecting.current || !selectionRange || !body) return;

      isSelecting.current = false;
      onSelection?.(selectionRange.pick(body));
    };

    window.addEventListener("mouseup", handleMouseUp)
    return () => window.removeEventListener("mouseup", handleMouseUp)
  });

  const handleMouseDown = (position: CellCoordinates) => {
    isSelecting.current = true;
    setSelectionRange(new SelectionRange(position, position));
  }

  const handleMouseEnter = (position: CellCoordinates) => {
    if (!isSelecting.current || !selectionRange) return;

    setSelectionRange(selectionRange.withEnd(position));
  }

  return { selectionRange, handleMouseDown, handleMouseEnter };
}
