import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegurosComponent } from './seguros.component';
import { SegurosRoutes } from './seguros.routing';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SeguroVidaComponent } from './seguro-vida/seguro-vida.component';
import { SeguroMedicoComponent } from './seguro-medico/seguro-medico.component';
import { SeguroAutoComponent } from './seguro-auto/seguro-auto.component';


@NgModule({
  imports: [
    CommonModule,
    SegurosRoutes,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    SegurosComponent,
    SeguroVidaComponent,
    SeguroMedicoComponent,
    SeguroAutoComponent],
})
export class SegurosModule { }
