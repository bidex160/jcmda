import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './components/component/component.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './about/about.component';
import { ProgramComponent } from './program/program.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { MissionsComponent } from './missions/missions.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { ContactComponent } from './contact/contact.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { PreviousConferencesComponent } from './previous-conferences/previous-conferences.component';
import { Angular4PaystackModule } from 'angular4-paystack';
import { PopupComponent } from './components/popup/popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import { DntpopupComponent } from './components/dntpopup/dntpopup.component';
import { ModalComponent } from './home/modal/modal.component';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProgramComponent,
    LogisticsComponent,
    MissionsComponent,
    SponsorshipComponent,
    ContactComponent,
    GetInvolvedComponent,
    PreviousConferencesComponent,
    PopupComponent,
    ConfirmationComponent,
    HomeComponent,
    DntpopupComponent,
    ModalComponent,
  ],
  imports: [
    MatInputModule,
   MatProgressSpinnerModule,
   MatDialogModule,
   MatNativeDateModule, 
   MatDatepickerModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    Angular4PaystackModule.forRoot('pk_live_ae6bb7ed03893baa0e8801dad009f2afd5eed0ab'),
    ComponentModule,
   BrowserAnimationsModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
