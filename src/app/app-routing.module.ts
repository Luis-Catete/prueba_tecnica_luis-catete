import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  //{ path: '**', pathMatch: 'full', redirectTo: 'home' },
  //{ path: 'home', loadChildren: () => import('./modules/home/home.component').then(m => m.HomeComponent) },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: 'nosotros', loadChildren: () => import('./modules/nosotros/nosotros.module').then(m => m.NosotrosModule) },
  { path: 'servicios', loadChildren: () => import('./modules/servicios/servicios.module').then(m => m.ServiciosModule ) },
  { path: 'seguros', loadChildren: () => import('./modules/seguros/seguros.module').then(m => m.SegurosModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
