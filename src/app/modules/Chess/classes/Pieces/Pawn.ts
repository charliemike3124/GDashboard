import { Piece } from '../Piece';
import { Tile } from '../Tile';

export class Pawn extends Piece {


  public moveW(targetTile: Tile,tileMap: Tile[][]) {

    console.log(tileMap)
    
    let front = tileMap[this.currentTile.x_pos - 1][this.currentTile.y_pos]
    let attack1 =tileMap[this.currentTile.x_pos - 1][this.currentTile.y_pos - 1]
    let attack2 = tileMap[this.currentTile.x_pos - 1][this.currentTile.y_pos + 1]
    if (targetTile == front && targetTile.piece == null)
    {

      tileMap[this.currentTile.x_pos][this.currentTile.y_pos].piece = null
      tileMap[this.currentTile.x_pos - 1][this.currentTile.y_pos].piece = this;

    }
      
  }

  public validateMovement(tileMap: Tile[][]) {

    if (tileMap[this.currentTile.x_pos - 1][this.currentTile.y_pos] != null ||
      tileMap[this.currentTile.x_pos - 1][this.currentTile.y_pos - 1] != null ||
      tileMap[this.currentTile.x_pos - 1][this.currentTile.y_pos + 1]) {

      this.canMove = true;
    }
    else
      this.canMove = false;
  }
  
}
