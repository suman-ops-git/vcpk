import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateComponent } from './template/template.component';
import { HeaderComponent } from './structural components/header/header.component';
import { FooterComponent } from './structural components/footer/footer.component';
import { BusinessRoutingModule } from './business-routing.module';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './structural components/home/home.component';
import { AboutComponent } from './structural components/about/about.component';
import { BasicComponent } from './structural components/course/basic/basic.component';
import { ProgramingComponent } from './structural components/course/programing/programing.component';
import { DtpComponent } from './structural components/course/dtp/dtp.component';
import { TallyComponent } from './structural components/course/tally/tally.component';
import { ContactComponent } from './structural components/contact/contact.component';
import { HomeBannerComponent } from "./structural components/home-banner/home-banner.component";
import { GalleryComponent } from './structural components/gallery/gallery.component';
import { StudentTestimonialsComponent } from './structural components/student-testimonials/student-testimonials.component';



@NgModule({
  declarations: [
    TemplateComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    BasicComponent,
    ProgramingComponent,
    DtpComponent,
    TallyComponent,
    ContactComponent,
    HomeBannerComponent,
    GalleryComponent,
    StudentTestimonialsComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    ReactiveFormsModule,
],
  exports: [
    TemplateComponent
  ]
})
export class BusinessModule { }
