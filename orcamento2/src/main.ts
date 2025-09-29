import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './app/app.rotas';
import { CadastroReceita } from './app/cadastro-receita/cadastro-receita';
import { Dashboard } from './app/dashboard/dashboard';
import { Relatorios } from './app/relatorios/relatorios';
import { CadastroDespesa } from './app/cadastro-despesa/cadastro-despesa'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet],
  template: `
    <router-outlet></router-outlet>
   
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
}
);
