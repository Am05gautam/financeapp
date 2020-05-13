import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgetPswdComponent } from './auth/forget-pswd/forget-pswd.component';
import { ManageExpComponent } from './home/manage-exp/manage-exp.component';
import { ManageCatComponent } from './home/manage-cat/manage-cat.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { AllExpComponent } from './home/manage-exp/all-exp/all-exp.component';
import { AddExpComponent } from './home/manage-exp/add-exp/add-exp.component';
import { EditExpComponent } from './home/manage-exp/edit-exp/edit-exp.component';
import { AllCatComponent } from './home/manage-cat/all-cat/all-cat.component';
import { EditCatComponent } from './home/manage-cat/edit-cat/edit-cat.component';
import { ExpSummaryComponent } from './home/exp-summary/exp-summary.component';


const routes: Routes = [
  {path:"auth",
  component:AuthComponent,
  children:[
    {path:"",component:SignUpComponent},
    {path:"sign-in",component:SignInComponent},
    {path:"sign-up",component:SignUpComponent},
    {path:"forget-pswd",component:ForgetPswdComponent},
  ]},
  {path:"home",component:HomeComponent,
  children:[
    {path:"",component:DashboardComponent},
    {path:"manage-exp",component:ManageExpComponent,
    children:[
      {path:"",component:AllExpComponent},
      {path:"add-exp",component:AddExpComponent},
      {path:"edit-exp",component:EditExpComponent},
    ]},
    {path:"manage-cat",component:ManageCatComponent,
    children:[
      {path:"",component:AllCatComponent},
      {path:"edit-cat",component:EditCatComponent},
    ]},
    {path:"exp-summary",component:ExpSummaryComponent},
  ]},
  { path: '',  redirectTo: '/auth', pathMatch: 'full', },
  {path:"**",component:AuthComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
