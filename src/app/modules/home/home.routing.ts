import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AgradecimientoComponent } from './agradecimiento/agradecimiento.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  //{ path: '**', pathMatch: 'full', redirectTo: 'inicio' },
  {  path:'inicio',component:HomeComponent,},
  {  path:'gracias',component:AgradecimientoComponent,},

];

export const HomeRoutes = RouterModule.forChild(routes);
