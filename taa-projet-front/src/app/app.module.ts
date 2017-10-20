import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import { AccordionModule } from 'ng2-accordion/';
// import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

import { AboutComponent } from './about/about.component';
import { ActiviteListComponent } from './activite-list/activite-list.component';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { LieuListComponent } from './lieu-list/lieu-list.component';
import { UserConnectFormComponent } from './user-connect-form/user-connect-form.component';
import { UserListComponent } from './user-list/user-list.component';

import { AccountService } from './services/account.service';
import { ActivitiesService } from './services/activities.service';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';
import { LieuListService } from './services/lieu-list.service';
import { UserService } from './services/user.service';
import { AlertComponent } from './alert/alert.component';
import { RegistrationComponent } from './registration/registration.component';

const routes = [

  { path: '', component: HomeComponent },
  { path: 'user', component: UserListComponent},
  { path: 'activities', component: ActiviteListComponent},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: AuthenticationComponent},
  { path: 'register', component: RegistrationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LieuListComponent,
    ActiviteListComponent,
    UserConnectFormComponent,
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
    // AccordionModule,
    // Ng2FilterPipeModule
  ],
  providers: [
    AccountService,
    ActivitiesService,
    AuthenticationService,
    LieuListService,
    AlertService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
