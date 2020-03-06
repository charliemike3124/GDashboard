import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { RadioButtonModule } from 'primeng/radiobutton';
import { Tile } from './classes/Tile';
import { Pawn } from './classes/Pieces/Pawn'
import { CalculationsService } from '../../common/services/calculations.service' 
import { Piece } from './classes/Piece';
import { Tower } from './classes/Pieces/Tower';
import { Knight } from './classes/Pieces/Knight';
import { Bishop } from './classes/Pieces/Bishop';
import { Queen } from './classes/Pieces/Queen';
import { King } from './classes/Pieces/King';

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss']
})
export class ChessComponent implements OnInit {
   
  public difficultyChoices = ['easy', 'medium', 'hard'];
  public difficultySelected = 'easy';
  
  public tiles: Tile[][];
  public selectedTile: Tile = null;
  public awaitingMove: boolean = false;
     
  public points = 0;

  pieceMap: any[][] = [
    ['twr', 'kng', 'bsh', 'que', 'king', 'bsh', 'kng', 'twr'],
    ['pwn', 'pwn', 'pwn', 'pwn', 'pwn', 'pwn', 'pwn', 'pwn'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['pwn', 'pwn', 'pwn', 'pwn', 'pwn', 'pwn', 'pwn', 'pwn'],
    ['twr', 'kng', 'bsh', 'que', 'king', 'bsh', 'kng', 'twr']
  ]

  constructor(private calcs: CalculationsService) { }

  ngOnInit() {

  }

  
  public generateTiles( ) {
     
    this.tiles = [];
    
      for (let i = 0; i < 8; i++) {
        this.tiles[i] = [];
        let team;
        if (i < 2)
          team = 'negras'
        if (i > 5)
          team = 'blancas'
        for (let j = 0; j < 8; j++) {
          switch (this.pieceMap[i][j]) {
            case 'twr':
              this.tiles[i][j] = new Tile(i, j, new Tower('Tower', null, team, 'twr'))
                this.tiles[i][j].piece.currentTile = this.tiles[i][j]
              break;
            case 'kng':
              this.tiles[i][j] = new Tile(i, j, new Knight('Knight', null, team, 'kng'))
              this.tiles[i][j].piece.currentTile = this.tiles[i][j]
              break;
            case 'bsh':
              this.tiles[i][j] = new Tile(i, j, new Bishop('Bishop', null, team, 'bsh'))
              this.tiles[i][j].piece.currentTile = this.tiles[i][j]
              break;
            case 'que':
              this.tiles[i][j] = new Tile(i, j, new Queen('Queen', null, team, 'que'))
              this.tiles[i][j].piece.currentTile = this.tiles[i][j]
              break;
            case 'king':
              this.tiles[i][j] = new Tile(i, j, new King('King', null, team, 'king'))
              this.tiles[i][j].piece.currentTile = this.tiles[i][j]
              break;
            case 'pwn':
              this.tiles[i][j] = new Tile(i, j, new Pawn('Pawn', null, team, 'pwn'))
              this.tiles[i][j].piece.currentTile = this.tiles[i][j]
              break;
            case '':
              //cambiar a que sea un tile vacio
              this.tiles[i][j] = new Tile(i, j, null)
              break;
          }          
        }
    }

  }
   

  public selectTile(tile: Tile) {

    if (this.awaitingMove)
      this.selectedTile.piece.moveW(tile, this.tiles)
    else
      this.selectedTile = tile;

    if (tile.piece != null) {
      this.selectedTile = tile;
      this.awaitingMove = true;
      tile.piece.validateMovement(this.tiles);
    }
    else
    {
      this.selectedTile = null;
      this.awaitingMove = false;
    }


  }
   

  public addStyles(tile: Tile) {
     

    //let styles = {
    //  'transform': this.calcs.getRandomIntInclusive(1, 1.5),
    //  'transition-duration': 5
    //};
    //return styles;
  }

}
