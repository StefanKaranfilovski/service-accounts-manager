﻿import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { AccountService } from '../common/services/account.service';
import { Account } from '../common/models/account';
import { ManageAccountDialogData } from './manageAccountDialog.data'

@Component({
    selector: 'app-manage-account-dialog',
    templateUrl: './manageAccountDialog.component.html',
    styleUrls: ['./manageAccountDialog.component.css']
})
export class ManageAccountDialogComponent {
    dialogTitle: string;
    username = new FormControl('', [Validators.required]);
    password = new FormControl('', [Validators.required]);
    clientId: number;
    accountId?: number;

    constructor(@Inject(MAT_DIALOG_DATA) public data: ManageAccountDialogData, public dialogReference: MatDialogRef<ManageAccountDialogComponent>, private _accountService: AccountService) {
        this.dialogTitle = data.title;
        this.username.setValue(data.username);
        this.password.setValue(data.password);
        this.clientId = data.clientId;
        this.accountId = data.accountId;
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
        let account = this.createSaveAccountObject();
        
        if (account.Id === undefined) {
            this._accountService.add(account)
                .subscribe(
                    (newAccountId) => {
                        account.Id = newAccountId;
                        this.dialogReference.close(account);
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        } else {
            this._accountService.update(account)
                .subscribe(
                    () => {
                        this.dialogReference.close(account);
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        }       
    };

    private createSaveAccountObject(): Account {
        let account = new Account();
        account.Username = this.username.value;
        account.Password = this.password.value;
        account.ClientId = this.clientId;
        account.Id = this.accountId;

        return account;
    };
}
