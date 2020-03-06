import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessComponent } from '../chess/chess.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [ChessComponent],
  imports: [
    CommonModule,
    FormsModule,
    SelectButtonModule,
    RadioButtonModule
  ]
})
export class ChessModule { }
