import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    applicationName: string = 'Service Accounts Manager';
    showSidebar: boolean;

    @Input() currentUser: string;
    @Output() toggleSidebar = new EventEmitter<boolean>();

    constructor(private store: Store<any>) {
        
    }

    ngOnInit(): void {
        this.store.pipe(select('navbar')).subscribe(
            navbar => {
                if (navbar) {
                    this.showSidebar = navbar.showSidebar;
                } else {
                    this.showSidebar = true;
                }
            }
        );
    }
;

    onToggleSidebar() {
        this.store.dispatch({
            type: 'TOGGLE_SIDEBAR',
            payload: !this.showSidebar
        });

        this.toggleSidebar.emit(this.showSidebar);
    };
}
