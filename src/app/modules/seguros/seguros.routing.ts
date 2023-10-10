import { Routes, RouterModule } from '@angular/router';
import { SegurosComponent } from './seguros.component';
import { SeguroVidaComponent } from './seguro-vida/seguro-vida.component';
import { SeguroAutoComponent } from './seguro-auto/seguro-auto.component';
import { SeguroMedicoComponent } from './seguro-medico/seguro-medico.component';

const routes: Routes = [
  /*{ path: '', pathMatch: 'full', redirectTo: 'seguro' },
  { path: '**', pathMatch: 'full', redirectTo: 'seguro' },*/
  { path: 'seguro', component: SegurosComponent, },
  { path: 'seguro-vida', component: SeguroVidaComponent, },
  { path: 'seguro-auto', component: SeguroAutoComponent, },
  { path: 'seguro-medico', component: SeguroMedicoComponent, },
];

export const SegurosRoutes = RouterModule.forChild(routes);
