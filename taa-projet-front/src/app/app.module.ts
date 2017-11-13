import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'ng2-accordion/';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { AboutComponent } from './about/about.component';
import { ActiviteListComponent } from './activite-list/activite-list.component';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { ActivityComponent } from './activity/activity.component';

import { AccountService } from './services/account.service';
import { ActivitiesService } from './services/activities.service';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { LieuService } from './services/lieu.service';
import { UserService } from './services/user.service';
import { AlertComponent } from './alert/alert.component';
import { RegistrationComponent } from './registration/registration.component';

import { AuthenticationGuard } from './guard/authentication.guard';

const routes = [

  { path: '', component: HomeComponent, canActivate: [AuthenticationGuard] },
  { path: 'activity', component: ActivityComponent, canActivate: [AuthenticationGuard] },
  { path: 'activities', component: ActiviteListComponent, canActivate: [AuthenticationGuard] },
  { path: 'about', component: AboutComponent, canActivate: [AuthenticationGuard] },
  { path: 'login', component: AuthenticationComponent },
  { path: 'register', component: RegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    ActiviteListComponent,
    HomeComponent,
    AboutComponent,
    AuthenticationComponent,
    AlertComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AccordionModule,
    Ng2FilterPipeModule
  ],
  providers: [
    AccountService,
    ActivitiesService,
    AuthenticationGuard,
    AuthenticationService,
    LieuService,
    AlertService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
