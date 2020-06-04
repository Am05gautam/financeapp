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
import { AddCatComponent } from './home/manage-cat/add-cat/add-cat.component';
import { EditCatComponent } from './home/manage-cat/edit-cat/edit-cat.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ExpSummaryComponent } from './home/exp-summary/exp-summary.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { Navbar2Component } from './shared/navbar2/navbar2.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import 'firebase/firestore';
import 'firebase/auth';
import { environment } from '../environments/environment';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { AuthGuardService } from './services/auth-guard.service';



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
    DashboardComponent,
    Navbar2Component,
    AddCatComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxPageScrollModule,
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
