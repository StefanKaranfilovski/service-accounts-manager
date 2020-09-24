import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavbarComponent } from '../navbar/navbar.component';

import { AppComponent } from './app.component';
import { LayoutComponent } from '../layout/layout.component';
import { ClientComponent } from '../client/client.component';
import { AccountComponent } from '../account/account.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ManageAccountDialogComponent } from '../manageAccountDialog/manageAccountDialog.component';
import { ConfirmationDialogComponent } from '../confirmationDialog/confirmationDialog.component';

import { CommonModule } from '../common/common.module';
import { ReactiveFormsModule } from '@angular/forms';

import { NgrxModule } from './ngrx.module'


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        CommonModule,
        NgrxModule
    ],
    declarations: [
        AppComponent,
        LayoutComponent,
        NavbarComponent,
        SidebarComponent,
        AccountComponent,
        ClientComponent,
        ManageAccountDialogComponent,
        ConfirmationDialogComponent
    ],
    providers: [
        {
            provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {
                hasBackdrop: true,
                disableClose: true
            }
        }
    ],
    bootstrap: [AppComponent],
    entryComponents: [
        ManageAccountDialogComponent,
        ConfirmationDialogComponent
    ]
})
export class AppModule { }
