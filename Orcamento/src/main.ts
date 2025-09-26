import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './app/app.rotas';
import { CadastroReceita } from './app/cadastro-receita/cadastro-receita';
import { Dashboard } from './app/dashboard/dashboard';
import { Relatorios } from './app/relatorios/relatorios';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, Relatorios, Dashboard, CadastroReceita ],
  template: `
    <router-outlet></router-outlet>
    <app-cadastro-receita></app-cadastro-receita>
    <app-dashboard></app-dashboard>
    <app-relatorios></app-relatorios>
    </a>
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
