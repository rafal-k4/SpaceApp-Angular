import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { A2sCommModule } from 'a2s-comm';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpaceModule } from './space/space.module';

import { HttpClientModule } from '@angular/common/http';
import { BlackHoleComponent } from './black-hole/black-hole.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackHoleComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SpaceModule,

    A2sCommModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
