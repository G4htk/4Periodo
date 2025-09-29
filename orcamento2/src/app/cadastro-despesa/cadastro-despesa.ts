import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cadastro-despesa',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro-despesa.html',
  styleUrl: './cadastro-despesa.css'
})
export class CadastroDespesa {
  constructor(private router: Router){}

  desc: string | null = null;
  val: number | null = null;
  cat: string | null = null;
  descricao: string = '';
  valor: number = 0;
  categoria: string = '';
  listaDesc: string[] = [];
  listaVal: number[] = [];
  listaCat: string[] = [];

  adicionarDespesa(){

    if (!this.desc || this.desc.trim() === ''){
      alert('A descrição é obrigatória!');
      return;
    }

    if (!this.val || this.val <= 0){
      alert('O valor deve ser maior que 0!');
      return;
    }

    this.adicionarDescricao();
    this.adicionarValor();
    this.adicionarCategoria();

  }

  adicionarDescricao(){
    if (this.desc !== null){
      let dsc = String(this.desc);
      this.listaDesc.push(dsc);
      this.desc = null;
    }
  }

  adicionarValor(){
    if (this.val !== null){
      let vl = Number(this.val);
      this.listaVal.push(vl);
      this.val = null;
    }
  }

  adicionarCategoria(){
    if (this.cat !== null){
      let ct = String(this.cat);
      this.listaCat.push(ct);
      this.cat = null;
    }
  }
  
  removerDescricao(index: number){
    this.listaDesc.splice(index, 1);
  }

  removerValor(index: number){
    this.listaVal.splice(index, 1);
  }

  removerCategoria(index: number){
    this.listaCat.splice(index, 1);
  }

  voltar(){
    this.router.navigate(["./Dashboard"])
  }


}