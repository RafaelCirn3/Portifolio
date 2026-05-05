import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { SobreComponent } from './pages/sobre.component';
import { ProjetosComponent } from './pages/projetos.component';
import { SkillsComponent } from './pages/skills.component';
import { ExperienciaComponent } from './pages/experiencia.component';
import { ContatoComponent } from './pages/contato.component';
import { NotFoundComponent } from './pages/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
  {
    path: 'projetos',
    component: ProjetosComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'experiencia',
    component: ExperienciaComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
