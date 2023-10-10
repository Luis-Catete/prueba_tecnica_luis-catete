import { Routes, RouterModule } from '@angular/router';
import { ServiciosComponent } from './servicios.component';
import { AccidentesComponent } from './accidentes/accidentes.component';
import { AtencionLineaComponent } from './atencion-linea/atencion-linea.component';
import { ClientesComponent } from './clientes/clientes.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { PagosComponent } from './pagos/pagos.component';

const routes: Routes = [
  { path: 'servicios', component: ServiciosComponent, },
  { path: 'accidentes', component: AccidentesComponent, },
  { path: 'atencion-en-linea', component: AtencionLineaComponent, },
  { path: 'clientes', component: ClientesComponent, },
  { path: 'cotizacion', component: CotizacionComponent, },
  { path: 'pagos', component: PagosComponent, },
];

export const ServiciosRoutes = RouterModule.forChild(routes);
