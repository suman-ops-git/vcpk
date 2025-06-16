import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './structural components/home/home.component';
import { AuthGuard } from '../services/auth.guard'; // Ensure this path is correct based on your project structure
import { AboutComponent } from './structural components/about/about.component';
import { BasicComponent } from './structural components/course/basic/basic.component';
import { DtpComponent } from './structural components/course/dtp/dtp.component';
import { TallyComponent } from './structural components/course/tally/tally.component';
import { ProgramingComponent } from './structural components/course/programing/programing.component';
import { ContactComponent } from './structural components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'course/basic',
    component: BasicComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'course/dtp',
    component: DtpComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'course/tally',
    component: TallyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'course/programming',
    component: ProgramingComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
