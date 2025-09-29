import { Component } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
constructor(private router: Router){}

  ReceitaT: number = 0;
  DespesaT: number = 0;
  SaldoF: number = 0

  ReceitaTotal(){
    
  }

  DespesaTotal(){

  }

  SaldoFinal(){
    this.SaldoF = this.ReceitaT - this.DespesaT;
  }

  relatorios(){
    this.router.navigate(['./Relatorios'])
  }
  receita(){
    this.router.navigate(['./CadastroReceita'])
  }
  despesa(){
    this.router.navigate(['./CadastroDespesa'])
  }
}