import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './structural components/header/header.component';
import { FooterComponent } from './structural components/footer/footer.component';
import { BusinessRoutingModule } from './business-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TemplateComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    TemplateComponent
  ]
})
export class BusinessModule { }
