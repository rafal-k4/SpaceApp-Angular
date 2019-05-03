import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiniGamesRoutingModule } from './mini-games-routing.module';
import { PlanetDetectorComponent } from './planet-detector/planet-detector.component';

@NgModule({
  declarations: [PlanetDetectorComponent],
  imports: [
    CommonModule,
    MiniGamesRoutingModule
  ],
  exports: [PlanetDetectorComponent]
})
export class MiniGamesModule { }
