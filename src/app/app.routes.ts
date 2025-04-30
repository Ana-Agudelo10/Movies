import { Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full',
  },
  {
    path: 'lista',
    component: ListaComponent,
    title: 'Desde app componente',
  },
];