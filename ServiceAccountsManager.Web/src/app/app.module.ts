import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AppComponent } from './app.component';
import { LayoutComponent } from '../layout/layout.component';
import { ClientComponent } from '../client/client.component';
import { AccountComponent } from '../account/account.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ManageAccountModalComponent } from '../manageAccountModal/manageAccountModal.component';

import { UserService } from '../common/services/user.service';
import { ClientService } from '../common/services/client.service';
import { AccountService } from '../account//account.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LayoutComponent,
        SidebarComponent,
        AccountComponent,
        ClientComponent,
        ManageAccountModalComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
    ],
    providers: [
        UserService,
        ClientService,
        AccountService,
        {
            provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {
                hasBackdrop: true,
                disableClose: true
            }
        }
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        ManageAccountModalComponent
    ]
})
export class AppModule { }
