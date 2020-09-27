import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/app.state';
import * as appActions from '../state/app.actions';
import * as fromAppReducer from '../state/app.reducer';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    applicationName: string = 'Service Accounts Manager';
    showSidebar: boolean;
    currentUsername: string;

    constructor(private store: Store<AppState>) {
        
    }

    ngOnInit(): void {
        this.store.pipe(select(fromAppReducer.getShowSidebar)).subscribe(
            (showSidebar: boolean) => {
                this.showSidebar = showSidebar;
            }
        );

        this.store.dispatch(new appActions.GetCurrentUsername());
        this.store.pipe(select(fromAppReducer.getCurrentUsername))
            .subscribe((username: string) => this.currentUsername = username);
    }
;
    onToggleSidebar() {
        this.store.dispatch(new appActions.ToggleSidebar());
    };
}
