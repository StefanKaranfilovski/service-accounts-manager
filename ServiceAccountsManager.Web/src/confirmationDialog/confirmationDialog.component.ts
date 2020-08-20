import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmationEnum } from '../common/enums/confirmationEnum'
import { ConfirmationDialogData } from './confirmationDialog.data'

@Component({
    selector: 'app-confirmation-dialog',
    templateUrl: './confirmationDialog.component.html',
    styleUrls: ['./confirmationDialog.component.css']
})
export class ConfirmationDialogComponent {
    dialogTitle: string;
    dialogDescription: string;

    constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData, public dialogReference: MatDialogRef<ConfirmationDialogComponent>) {
        this.dialogTitle = data.title;
        this.dialogDescription = data.description;
    };

    confirmAction(): void {
        this.dialogReference.close(ConfirmationEnum.Yes);
    };
}
