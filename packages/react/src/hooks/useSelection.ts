import { useEffect, useRef, useState } from 'react';
import type { CellPosition } from "../types";
import { SelectionRange } from "../models/SelectionRange.ts";

export const useSelection = () => {
  const [selection, setSelection] = useState<SelectionRange | null>(null);
  const isSelecting = useRef<boolean>(false);

  useEffect(() => {
    const handleMouseUp = () => (isSelecting.current = false);
    window.addEventListener('mouseup', handleMouseUp);

    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  const handleMouseDown = (cell: CellPosition) => {
    isSelecting.current = true;
    setSelection(new SelectionRange(cell, cell));
  };

  const handleMouseEnter = (cell: CellPosition) => {
    if (!isSelecting.current || !selection) return;

    if (selection.withEnd(cell)) {
      setSelection(new SelectionRange(selection.start, selection.end));
    }
  };

  return { selection, handleMouseDown, handleMouseEnter };
};
