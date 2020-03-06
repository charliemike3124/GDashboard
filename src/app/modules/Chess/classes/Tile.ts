import { Piece } from './Piece';

export class Tile{
  x_pos: number;
  y_pos: number;
  piece: Piece;

  constructor(x: number, y: number, piece: Piece) {

    this.x_pos = x;
    this.y_pos = y;
    this.piece = piece;

  }
}
