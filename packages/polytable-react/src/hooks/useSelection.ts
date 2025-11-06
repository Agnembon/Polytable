import {useEffect, useRef, useState} from 'react';
import type {CellPosition, CellValue, TableData} from "@/types";
import {SelectionRange} from "../models/SelectionRange.ts";

export const useSelection = (data?: TableData, onSelectionChange?: (data: CellValue[][]) => void) => {
    const [selectionRange, setSelectionRange] = useState<SelectionRange | null>(null);
    const isSelecting = useRef<boolean>(false);

    useEffect(() => {
        globalThis.addEventListener('mouseup', handleMouseUp);

        return () => globalThis.removeEventListener('mouseup', handleMouseUp);
    }, [selectionRange]);

    const handleMouseDown = (cell: CellPosition) => {
        isSelecting.current = true;
        setSelectionRange(new SelectionRange(cell, cell));
    };

    const handleMouseEnter = (cell: CellPosition) => {
        if (!isSelecting.current || !selectionRange) return;

        if (selectionRange.withEnd(cell)) {
            setSelectionRange(new SelectionRange(selectionRange.start, selectionRange.end));
        }
    };

    const handleMouseUp = () => {
        if (!isSelecting.current || !selectionRange || !data) return;

        isSelecting.current = false
        const selectedData = selectionRange.getValues(data.content);
        onSelectionChange?.(selectedData);
    };

    return {selectionRange, handleMouseDown, handleMouseEnter};
};
