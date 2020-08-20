import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationEnum } from '../common/enums/confirmationEnum'

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './confirmationDialog.component.html',
    styleUrls: ['./confirmationDialog.component.css']
})
export class ConfirmationDialogComponent {
    dialogTitle: string;
    dialogDescription: string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogReference: MatDialogRef<ConfirmationDialogComponent>) {
        this.dialogTitle = data.dialogTitle;
        this.dialogDescription = data.dialogDescription;
    };

    confirmAction(): void {
        this.dialogReference.close(ConfirmationEnum.Yes);
    };
}
