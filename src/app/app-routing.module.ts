import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { HomeComponent } from './home/home.component';
import { LogisticsComponent } from './logistics/logistics.component';
import { MissionsComponent } from './missions/missions.component';
import { PreviousConferencesComponent } from './previous-conferences/previous-conferences.component';
import { ProgramComponent } from './program/program.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  {
    path:'about-conference',
    component: AboutComponent
  },
  {
    path:'accommodation',
    component: LogisticsComponent
  }
  ,{
    path:'missions',
    component: MissionsComponent
  },
  {
    path:'sponsorship',
    component: SponsorshipComponent
  },
  {
    path:'get-involved',
    component: GetInvolvedComponent
  },
  {
    path:'program',
    component: ProgramComponent
  },
  {
    path:'previous-conferences',
    component: PreviousConferencesComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
