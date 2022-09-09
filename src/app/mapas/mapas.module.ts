import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapasRoutingModule } from './mapas-routing.module';
import { MiniMapaComponent } from './components/mini-mapa/mini-mapa.component';
import { FullScreenComponent } from './components/pages/full-screen/full-screen.component';
import { MarcadoresComponent } from './components/pages/marcadores/marcadores.component';
import { ZoomRangeComponent } from './components/pages/zoom-range/zoom-range.component';
import { PropiedadesComponent } from './components/pages/propiedades/propiedades.component';


@NgModule({
  declarations: [
    MiniMapaComponent,
    FullScreenComponent,
    MarcadoresComponent,
    ZoomRangeComponent,
    PropiedadesComponent
  ],
  imports: [
    CommonModule,
    MapasRoutingModule
  ]
})
export class MapasModule { }
