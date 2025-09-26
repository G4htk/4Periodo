import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-relatorios',
  imports: [CommonModule, FormsModule],
  templateUrl: './relatorios.html',
  styleUrl: './relatorios.css'
})
export class Relatorios {
  SaldoM: number = 0;
  Categorias: number = 0;
  MediaM: number = 0;

  SaldoMensal(){
   let saldo = this.SaldoM;
    if(saldo <= 0){

    }else{
      
    }
  }
}
