import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DeleteAccountEnum } from '../common/enums/deleteAccountEnum'

@Component({
    selector: 'app-delete-account-dialog',
    templateUrl: './deleteAccountDialog.component.html',
    styleUrls: ['./deleteAccountDialog.component.css']
})
export class DeleteAccountDialogComponent {
    dialogTitle: string = "Delete account";
    dialogDescription: string = "Are you sure you want to delete the account?";

    constructor(public dialogReference: MatDialogRef<DeleteAccountDialogComponent>) {

    };

    deleteAccount(): void {
        this.dialogReference.close(DeleteAccountEnum.Yes);
    };
}
