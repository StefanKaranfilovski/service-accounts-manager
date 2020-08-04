import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AccountService {

    constructor(private _http: HttpClient) {

    }

    use(accountId: number, usedBy: string, usedFrom: Date): Observable<object> {
        let data = {
            accountId: accountId,
            usedBy: usedBy,
            usedFrom: usedFrom
        };

        return this._http.post('Account/UseAccount', data);
    }

    release(accountId: number, usedTo: Date): Observable<object> {
        let data = {
            accountId: accountId,
            usedTo: usedTo
        };

        return this._http.post('Account/ReleaseAccount', data);
    }
}
