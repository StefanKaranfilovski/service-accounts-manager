import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../common/models/account';
import { AccountEmitter } from '../common/models/accountEmitter';
import { AccountService } from './account.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
    @Input() account: Account;
    @Input() currentUser: string;
    @Input() clientId: number;

    @Output() onUseAccountEmitter = new EventEmitter<AccountEmitter>();
    @Output() onReleaseAccountEmitter = new EventEmitter<AccountEmitter>();
    @Output() onDeleteAccountEmitter = new EventEmitter<AccountEmitter>();

    constructor(private _accountService: AccountService) {

    }

    ngOnInit() {
    }

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
    }

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
    }

    deleteAccount(accountId: number): void {
        this._accountService.delete(accountId)
            .subscribe(
                () => {
                    this.onDeleteAccountEmitter.emit({
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
    }
}
