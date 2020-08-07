import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-manage-account-modal',
    templateUrl: './manageAccountModal.component.html',
    styleUrls: ['./manageAccountModal.component.css']
})
export class ManageAccountModalComponent {
    username = new FormControl('', [Validators.required]);
    password = new FormControl('', [Validators.required]);

    constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
        this.username.setValue(data.username);
        this.password.setValue(data.password);
    }

    getUsernamErrorMessage() {
        if (this.username.hasError('required')) {
            return 'You must enter a value';
        }
    }

    getPasswordErrorMessage() {
        if (this.password.hasError('required')) {
            return 'You must enter a value';
        }
    }
}
