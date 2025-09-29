import { Routes } from '@angular/router';
import { CadastroReceita } from './cadastro-receita/cadastro-receita';
import { Dashboard } from './dashboard/dashboard';
import { Relatorios } from './relatorios/relatorios';
import { CadastroDespesa } from './cadastro-despesa/cadastro-despesa';

export const routes: Routes = [
  {path: 'CadastroReceita', component: CadastroReceita },
  {path: 'Dashboard', component: Dashboard},
  {path: 'Relatorios', component: Relatorios},
  {path:'', redirectTo: 'Dashboard', pathMatch: 'full'},
  {path: 'CadastroDespesa', component: CadastroDespesa}

]