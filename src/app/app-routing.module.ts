import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent}
  // {path: 'register', component: SignupComponent},
  // {path: 'login', component: LoginComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
