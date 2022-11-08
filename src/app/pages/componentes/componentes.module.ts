import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentesPageRoutingModule } from './componentes-routing.module';

import { ComponentesPage } from './componentes.page';
import { ComponentesModule } from '../../componentes/componentes.module';
import { DetalleComponent } from '../../componentes/detalle/detalle.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesPageRoutingModule,
    ComponentesModule,
  ],
  declarations: [ComponentesPage,DetalleComponent],
  exports:[
    DetalleComponent
    ],
})
export class ComponentesPageModule {}
