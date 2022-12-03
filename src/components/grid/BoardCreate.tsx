import { Board } from "./BoardClass";
import { Fragment } from "react";

export function CreateNewBoard(size: string) {
    let board = new Board()
        let boardSize: number = 0;
        // This assigns the height and width
        if (size == "small") boardSize = 5;
        if (size == "medium") boardSize = 10;
        if (size == "large") boardSize = 15;
        if (size =="x-large") boardSize = 20;
        board.height = boardSize;
        board.width = boardSize;
    
         return board.createGrid();
}