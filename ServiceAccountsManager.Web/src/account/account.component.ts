import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../common/models/account';
import { AccountEmitter } from '../common/models/accountEmitter';
import { AccountService } from '../common/services/account.service';
import { MatDialog } from '@angular/material/dialog';
import { ManageAccountDialogComponent } from '../manageAccountDialog/manageAccountDialog.component';
import { ConfirmationDialogComponent } from '../confirmationDialog/confirmationDialog.component';
import { ConfirmationEnum } from '../common/enums/confirmationEnum';
import { ConfirmationDialogData } from '../confirmationDialog/confirmationDialog.data';
import { ManageAccountDialogData } from '../manageAccountDialog/manageAccountDialog.data';

const editAccountDialogTitle: string = "Edit Account";
const deleteConfirmationDialogTitle: string = "Delete account";
const deleteConfirmationDialogDescription: string = "Are you sure you want to delete the account?";

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent {
    @Input() account: Account;
    @Input() currentUser: string;
    @Input() clientId: number;

    @Output() onUseAccountEmitter = new EventEmitter<AccountEmitter>();
    @Output() onReleaseAccountEmitter = new EventEmitter<AccountEmitter>();
    @Output() onDeleteAccountEmitter = new EventEmitter<AccountEmitter>();

    constructor(private _accountService: AccountService, public dialog: MatDialog) {

    };

    useAccount(accountId: number): void {
        let usedFrom: Date = new Date();

        this._accountService.use(accountId, this.currentUser, usedFrom)
            .subscribe(
                () => {
                    this.onUseAccountEmitter.emit({
                        clientId: this.clientId,
                        accountId: accountId,
                        usedBy: this.currentUser,
                        usedFrom: usedFrom
                    });
                },
                (error) => {
                    console.log(error);
                }
            );
    };

    releaseAccount(accountId: number): void {
        let usedTo: Date = new Date();

        this._accountService.release(accountId, usedTo)
            .subscribe(
                () => {
                    this.onReleaseAccountEmitter.emit({
                        clientId: this.clientId,
                        accountId: accountId,
                        usedBy: null,
                        usedFrom: null
                    });
                },
                (error) => {
                    console.log(error);
                }
            );
    };

    openDeleteAccountDialog(): void {
        let dialogData: ConfirmationDialogData = new ConfirmationDialogData(deleteConfirmationDialogTitle, deleteConfirmationDialogDescription);
        let dialogReference = this.dialog.open(ConfirmationDialogComponent, {
            data: dialogData
        });

        dialogReference.afterClosed().subscribe(result => {
            if (this.shouldDeleteAccount(result)) {
                this.deleteAccount();
            }
        });
    };

    private shouldDeleteAccount(result: any): boolean {
        return result !== "" && result as ConfirmationEnum === ConfirmationEnum.Yes
    };

    private deleteAccount(): void {
        this._accountService.delete(this.account.Id)
            .subscribe(
                () => {
                    this.onDeleteAccountEmitter.emit({
                        clientId: this.clientId,
                        accountId: this.account.Id,
                        usedBy: null,
                        usedFrom: null
                    });
                },
                (error) => {
                    console.log(error);
                }
            );
    };

    openManageAccountDialog(): void {
        let dialogData: ManageAccountDialogData = new ManageAccountDialogData(editAccountDialogTitle, this.account.Username, this.account.Password, this.clientId, this.account.Id);
        let dialogReference = this.dialog.open(ManageAccountDialogComponent, {
            data: dialogData
        });

        dialogReference.afterClosed().subscribe(result => {
            if (result !== "") {
                let castedResult = result as Account;
                this.account.Username = castedResult.Username;
                this.account.Password = castedResult.Password;
            }
        });
    };
}
