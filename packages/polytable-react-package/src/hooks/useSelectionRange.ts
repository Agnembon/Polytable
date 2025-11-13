import { useCallback, useEffect, useRef, useState } from "react";
import type { CellCoordinates, CellValue } from "@/core/types";
import { SelectionRange } from "@/core/SelectionRange";

export const useSelectionRange = (body?: CellValue[][], onSelection?: (cells: CellValue[][]) => void) => {
  const [selectionRange, setSelectionRange] = useState<SelectionRange | null>(null);
  const isSelecting = useRef(false);

  const handleMouseUp = useCallback(() => {
    if (!isSelecting.current || !selectionRange || !body) {
      return;
    }

    isSelecting.current = false;
    onSelection?.(selectionRange.pick(body));
  }, [selectionRange, onSelection, body]);

  useEffect(() => {
    window.addEventListener("mouseup", handleMouseUp);

    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseUp]);

  const handleMouseDown = useCallback((position: CellCoordinates) => {
    isSelecting.current = true;
    setSelectionRange(new SelectionRange(position, position));
  }, []);

  const handleMouseEnter = useCallback((position: CellCoordinates) => {
    if (!isSelecting.current || !selectionRange) {
      return;
    }

    setSelectionRange(selectionRange.withEnd(position));
  }, [selectionRange]);

  return { selectionRange, handleMouseDown, handleMouseEnter };
};
