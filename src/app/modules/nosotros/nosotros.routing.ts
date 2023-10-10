import { Routes, RouterModule } from '@angular/router';
import { NosotrosComponent } from './nosotros.component';

const routes: Routes = [
  /*{ path: '', pathMatch: 'full', redirectTo: 'nosotros' },
  { path: '**', pathMatch: 'full', redirectTo: 'nosotros' },*/
  { path: 'conocenos', component: NosotrosComponent, },
];

export const NosotrosRoutes = RouterModule.forChild(routes);
