import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Portifolio } from './pages/portifolio/portifolio';
import { Evento } from './pages/evento/evento';
import { Loja } from './pages/loja/loja';
import { Calculadora } from './pages/calculadora/calculadora';
import { JogoMemoria } from './pages/jogo-memoria/jogo-memoria';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'portfolio', component: Portifolio },
  { path: 'evento', component: Evento },
  { path: 'loja', component: Loja },
  { path: 'calculadora', component: Calculadora },
  { path: 'jogo-memoria', component: JogoMemoria },
];
