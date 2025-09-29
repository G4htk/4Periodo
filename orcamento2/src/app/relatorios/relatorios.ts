import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-relatorios',
  imports: [CommonModule, FormsModule],
  templateUrl: './relatorios.html',
  styleUrl: './relatorios.css'
})
export class Relatorios {
  constructor(private router: Router){}
  SaldoM: number = 0;
  Categorias: number = 0;
  MediaM: number = 0;

  SaldoMensal(){
   let saldo = this.SaldoM;
    if(saldo <= 0){

    }else{
      
    }
  }
  voltar(){
    this.router.navigate(['./Dashboard'])
  }
}
