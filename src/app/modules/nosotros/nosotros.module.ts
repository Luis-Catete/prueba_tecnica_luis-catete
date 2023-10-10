import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './nosotros.component';
import { NosotrosRoutes } from './nosotros.routing';

@NgModule({
  imports: [
    CommonModule,
    NosotrosRoutes
  ],
  declarations: [NosotrosComponent]
})
export class NosotrosModule { }
