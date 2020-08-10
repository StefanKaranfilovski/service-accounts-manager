import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/account';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private _http: HttpClient) {

    };

    use(accountId: number, usedBy: string, usedFrom: Date): Observable<object> {
        let data = {
            accountId: accountId,
            usedBy: usedBy,
            usedFrom: usedFrom
        };

        return this._http.post('Account/Use', data);
    };

    release(accountId: number, usedTo: Date): Observable<object> {
        let data = {
            accountId: accountId,
            usedTo: usedTo
        };

        return this._http.post('Account/Release', data);
    };

    save(account: Account): Observable<object> {
        let data = {
            account: account
        };
        
        return this._http.post('Account/Save', data);
    };

    delete(accountId: number) :Observable<object> {
        let data = {
            accountId: accountId
        };

        return this._http.post('Account/Delete', data);
    };
}
