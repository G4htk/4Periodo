import { Component } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  ReceitaT: number = 0;
  DespesaT: number = 0;
  SaldoF: number = 0

  ReceitaTotal(){
    
  }

  DespesaTotal(){

  }

  SaldoFinal(){
    this.ReceitaT - this.DespesaT = this.SaldoF;
  }
}