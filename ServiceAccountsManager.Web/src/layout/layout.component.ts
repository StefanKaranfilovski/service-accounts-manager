import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../state/app.state';
import * as fromAppReducer from '../state/app.reducer';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    showSidebar: boolean = true;

    constructor(private store: Store<AppState>) {

    };

    ngOnInit() {
        this.store.pipe(select(fromAppReducer.getShowSidebar)).subscribe(
            (showSidebar: boolean) => {
                this.showSidebar = showSidebar;
            }
        );
    };
}
