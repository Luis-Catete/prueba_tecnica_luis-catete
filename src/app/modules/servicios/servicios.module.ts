import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiciosComponent } from './servicios.component';
import { ServiciosRoutes } from './servicios.routing';
import { AccidentesComponent } from './accidentes/accidentes.component';
import { AtencionLineaComponent } from './atencion-linea/atencion-linea.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { PagosComponent } from './pagos/pagos.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    ServiciosRoutes,
    MatIconModule
  ],
  declarations: [
    ServiciosComponent,
    AccidentesComponent,
    AtencionLineaComponent,
    ClientesComponent,
    CotizacionComponent,
    PagosComponent
  ]
})
export class ServiciosModule { }
