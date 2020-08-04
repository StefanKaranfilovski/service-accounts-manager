import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Client } from '../models/client';
import { ClientIdentifier } from '../models/clientIdentifier';

@Injectable({
    providedIn: 'root'
})
export class ClientService {
    clients: Client[];
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private _http: HttpClient) {

    }

    getClients(): Observable<Client[]> {
        return this._http.get<Client[]>('Client/GetAllClients', this.httpOptions);
    }

    getClientsNames(): Observable<ClientIdentifier[]> {
        return this._http.get<ClientIdentifier[]>('Client/GetAllClientsNames', this.httpOptions);
    }
}
