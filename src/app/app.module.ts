import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { BusinessModule } from '../business/business.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Required for animations
import { ModalModule } from 'ngx-bootstrap/modal'; // Import ModalModule
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BusinessModule,
    BrowserAnimationsModule, // Add this for ngx-bootstrap animations
    ModalModule.forRoot() // Add ModalModule here

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
