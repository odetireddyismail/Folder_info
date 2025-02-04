import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { IsmailComponent } from './ismail/ismail.component';
import { Emp } from './emp/emp.component';
@NgModule({
  declarations: [
    AppComponent,
    Emp
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
