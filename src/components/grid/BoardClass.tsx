import { CreateNewTile } from "../tiles/TileCreate"
import { Fragment, ReactElement } from "react";

export class Board {
    private _height: number = 0;
    private _width: number = 0;

    public get height() {
        return this._height;
    }

    public set height(Height: number) {
        this._height = Height;
    }

    public get width() {
        return this._width;
    }

    public set width(Width: number) {
        this._width = Width;
    }

    // This will create a grid based on the height and width
    createGrid() {

        
        // Needs an overall container for the grid
        const container = document.getElementById("container") as HTMLElement;
        // Loop through the height and width creating a new tile for each iteration
        for (let i = 0; i < this._height; i++) {
            const div = document.createElement("div") as HTMLElement;
            for (let j = 0; j < this._width; j++) {
                // Identifies the position of each square so that up,right,down and left can properly be assigned their booleans
                let position: string = " "
                if (i == 0 && j == 0) position = "topLeft"
                else if (i == 0 && j != this.width) position = "topMiddle";
                else if ( i == 0 && j == this.width) position = "topRight";
                else if (i != this.height && j == 0) position = "middleLeft";
                else if (i != this.height && j != 0 && j != this.width) position = "middleMiddle";
                else if (i != this.height && j == this.width) position = "middleRight";
                else if (i == this.height && j == 0) position = "bottomLeft";
                else if (i == this.height && j != this.width) position = "bottomMiddle"
                else position = "bottomRight";
                let tile = CreateNewTile(" ", position, true);
                tile.classList.add("square")
                tile.classList.add("empty")
                container.appendChild(tile)
            }
            container.append(div);
        }
        return container;
        
    }
}