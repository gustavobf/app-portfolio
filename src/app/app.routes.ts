import { Routes } from '@angular/router';
import { ROUTES } from './core/constants';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent)
  },
  { path: '**', redirectTo: '' }
];