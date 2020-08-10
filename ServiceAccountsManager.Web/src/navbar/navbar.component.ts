import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    applicationName: string = 'Service Accounts Manager';
    showSidebar: boolean;

    @Input() currentUser: string;
    @Output() toggleSidebar = new EventEmitter<boolean>();

    constructor() {
        this.showSidebar = true;
    };

    onToggleSidebar() {
        this.showSidebar = !this.showSidebar;
        this.toggleSidebar.emit(this.showSidebar);
    };
}
