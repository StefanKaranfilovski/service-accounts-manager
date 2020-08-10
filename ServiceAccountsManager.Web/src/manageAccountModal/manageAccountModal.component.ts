﻿import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { AccountService } from '../common/services/account.service';
import { Account } from '../common/models/account';

@Component({
    selector: 'app-manage-account-modal',
    templateUrl: './manageAccountModal.component.html',
    styleUrls: ['./manageAccountModal.component.css']
})
export class ManageAccountModalComponent {
    username = new FormControl('', [Validators.required]);
    password = new FormControl('', [Validators.required]);
    clientId: number;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogReference: MatDialogRef<ManageAccountModalComponent>, private _accountService: AccountService) {
        this.username.setValue(data.username);
        this.password.setValue(data.password);
        this.clientId = data.clientId;
    };

    getUsernamErrorMessage() {
        if (this.username.hasError('required')) {
            return 'You must enter a value';
        }
    };

    getPasswordErrorMessage() {
        if (this.password.hasError('required')) {
            return 'You must enter a value';
        }
    };

    isFormValid(): boolean {
        return this.username.valid && this.password.valid;
    };

    saveAccount(): void {
        let account = new Account();
        account.Username = this.username.value;
        account.Password = this.password.value;
        account.ClientId = this.clientId;
        
        this._accountService.save(account)
            .subscribe(
                () => {
                    this.dialogReference.close(account);
                },
                (error) => {
                    console.log(error);
                }
            );
    };
}
