import { Tile } from './Tile';

export abstract class Piece {
  public name: string;
  public currentTile: Tile;
  public team: string;
  public sprite: any;
  public tileMap: Tile[][]
  public canMove: boolean

  constructor(public xname: string, pStartingTile: Tile, pTeam: string,sprite: any) {
    this.name = xname;
    this.currentTile = pStartingTile;
    this.team = pTeam;
    this.sprite = sprite; 
  }

  abstract moveW(targetTile: Tile, tileMap: Tile[][]): void;
  abstract validateMovement(tileMap: Tile[][]): void;
}
