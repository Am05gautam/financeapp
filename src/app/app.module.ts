import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ForgetPswdComponent } from './auth/forget-pswd/forget-pswd.component';
import { HomeComponent } from './home/home.component';
import { ManageExpComponent } from './home/manage-exp/manage-exp.component';
import { ManageCatComponent } from './home/manage-cat/manage-cat.component';
import { AddExpComponent } from './home/manage-exp/add-exp/add-exp.component';
import { EditExpComponent } from './home/manage-exp/edit-exp/edit-exp.component';
import { AllExpComponent } from './home/manage-exp/all-exp/all-exp.component';
import { AllCatComponent } from './home/manage-cat/all-cat/all-cat.component';
import { EditCatComponent } from './home/manage-cat/edit-cat/edit-cat.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ExpSummaryComponent } from './home/exp-summary/exp-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    ForgetPswdComponent,
    HomeComponent,
    ManageExpComponent,
    ManageCatComponent,
    AddExpComponent,
    EditExpComponent,
    AllExpComponent,
    AllCatComponent,
    EditCatComponent,
    NavbarComponent,
    FooterComponent,
    ExpSummaryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
