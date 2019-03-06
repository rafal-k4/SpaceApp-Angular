import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { A2sCommModule } from 'a2s-comm';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    A2sCommModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
