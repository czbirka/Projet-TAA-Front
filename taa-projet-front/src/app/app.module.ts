import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccordionModule } from 'ng2-accordion/'

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { LieuListComponent } from './lieu-list/lieu-list.component';
import { ActiviteListComponent } from './activite-list/activite-list.component';
import { UserService } from './services/user.service';
import { UserConnectFormComponent } from './user-connect-form/user-connect-form.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes = [
  { path:'', component:HomeComponent },
  { path:'user', component:UserListComponent},
  { path:'about', component:AboutComponent},
  { path:'login', component:AuthenticationComponent},
  { path:'register', component:AuthenticationComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    LieuListComponent,
    ActiviteListComponent,
    UserConnectFormComponent,
    HomeComponent,
    AboutComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AccordionModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
