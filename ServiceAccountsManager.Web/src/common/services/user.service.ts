import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private _http: HttpClient) { }

    getCurrentUser() {
        return this._http.get('User/GetCurrentUsername', { responseType: 'text' });
    }
}
