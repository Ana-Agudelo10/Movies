import { Routes } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { EnvioComponent } from './envio/envio.component'; // Importa el componente de envío

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
  {
    path: 'editar/edit',
    component: EnvioComponent,
    title: 'Desde app componente',
  },

  { 
    path: 'editar/edit/:id', 
    component: EnvioComponent 
  },
];