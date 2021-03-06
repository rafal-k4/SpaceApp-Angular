import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlackHoleComponent } from './black-hole/black-hole.component';
import { PlanetDetectorComponent } from './mini-games/planet-detector/planet-detector.component';

const routes: Routes = [
  {path: '', redirectTo: 'space', pathMatch: 'full'},
  {path: '**', component: BlackHoleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
