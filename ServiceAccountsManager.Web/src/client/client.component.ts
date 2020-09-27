import { Component, OnInit, Input } from '@angular/core';
import { ClientService } from '../common/services/client.service';
import { Client } from '../common/models/client';
import { Account } from '../common/models/account';
import { AccountEmitter } from '../common/models/accountEmitter';
import { MatDialog } from '@angular/material/dialog';
import { ManageAccountDialogComponent } from '../manageAccountDialog/manageAccountDialog.component';
import { ManageAccountDialogData } from '../manageAccountDialog/manageAccountDialog.data';

const createAccountDialogTitle: string = "Create new Account";

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
    clients: Client[];
    loaded: boolean = false;

    constructor(private _clientService: ClientService, public dialog: MatDialog) { }

    ngOnInit() {
        this._clientService.getClients().subscribe(
            (clients) => {
                this.clients = clients;
                this.loaded = true;
            },
            (error) => {
                console.log(error);
            }
        );
    };

    onUseAccount(onUseAccountEmitter: AccountEmitter): void {
        this.toggleAccountUsedBy(onUseAccountEmitter.clientId, onUseAccountEmitter.accountId, onUseAccountEmitter.usedBy, onUseAccountEmitter.usedFrom);
    };

    onReleaseAccount(onReleaseAccountEmitter: AccountEmitter): void {
        this.toggleAccountUsedBy(onReleaseAccountEmitter.clientId, onReleaseAccountEmitter.accountId, onReleaseAccountEmitter.usedBy, onReleaseAccountEmitter.usedFrom);
    };

    onDeleteAccount(onDeleteAccountEmitter: AccountEmitter): void {
        this.clients.forEach((currentClient) => {
            if (currentClient.Id === onDeleteAccountEmitter.clientId) {
                var index = currentClient.Accounts.findIndex(account => account.Id == onDeleteAccountEmitter.accountId);
                currentClient.Accounts.splice(index, 1);
            }
        });
    };

    toggleAccountUsedBy(clientId: number, accountId: number, username?: string, usedFromTime?: Date): void {
        this.clients.forEach((currentClient) => {
            if (clientId === currentClient.Id) {
                currentClient.Accounts.forEach((currentAccount) => {
                    if (currentAccount.Id === accountId) {
                        currentAccount.UsedBy = username;
                        currentAccount.UsedFrom = usedFromTime;
                    }
                });
            }
        });
    };

    openManageAccountDialog(clientId: number): void {
        let dialogData: ManageAccountDialogData = new ManageAccountDialogData(createAccountDialogTitle, "", "", clientId, null);
        let dialogReference = this.dialog.open(ManageAccountDialogComponent, {
            data: dialogData
        });

        dialogReference.afterClosed().subscribe(result => {
            let castedResult = result as Account;
            
            this.clients.forEach((currentClient) => {
                if (currentClient.Id === castedResult.ClientId) {
                    currentClient.Accounts.push(result);
                }
            });
        });
    };
}
