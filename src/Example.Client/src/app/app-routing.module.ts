import { RouterModule, Routes } from '@angular/router';

import { CidadeCriarComponent } from './cidade/cidade-criar/cidade-criar.component';
import { CidadeEditarComponent } from './cidade/cidade-editar/cidade-editar.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { PessoaCriarComponent } from './pessoa/pessoa-criar/pessoa-criar.component';
import { PessoaEditarComponent } from './pessoa/pessoa-editar/pessoa-editar.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/lists', pathMatch: 'full' },
  { path: 'lists', component: ListComponent },
  { path: 'pessoa', component: PessoaCriarComponent },
  { path: 'pessoa/:id', component: PessoaEditarComponent },
  { path: 'cidade', component: CidadeCriarComponent },
  { path: 'cidade/:id', component: CidadeEditarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
