import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutComponent } from '../layout/layout.component';
import { ClientComponent } from '../client/client.component';
import { AccountComponent } from '../account/account.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

import { UserService } from '../common/services/user.service';
import { ClientService } from '../common/services/client.service';
import { AccountService } from '../account//account.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    SidebarComponent,
    AccountComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    ClientService,
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
