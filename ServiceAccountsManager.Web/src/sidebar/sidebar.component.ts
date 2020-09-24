import { Component, OnInit } from '@angular/core';
import { ClientSidebar } from '../common/models/clientSidebar';
import { AppState } from '../state/app.state';
import { Store, select } from '@ngrx/store';
import * as appActions from '../state/app.actions';
import * as fromAppReducer from '../state/app.reducer';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    clientsStatus: ClientSidebar[] = [];
    errorMessage$: Observable<string>;

    constructor(private store: Store<AppState>) { }

    ngOnInit(): void {
        this.errorMessage$ = this.store.pipe(select(fromAppReducer.getClientsNamesError));
        this.store.dispatch(new appActions.LoadClientsNames());
        this.store.pipe(select(fromAppReducer.getClientsNames))
            .subscribe((clientsNames: ClientSidebar[]) => this.clientsStatus = clientsNames);
    };

    onClientClick(clientId: number): void {
        this.store.dispatch(new appActions.OnSelectClientName(clientId));
    };

    resetClientSelection(): void {
        this.store.dispatch(new appActions.OnResetClientsSelection());
    };
}
