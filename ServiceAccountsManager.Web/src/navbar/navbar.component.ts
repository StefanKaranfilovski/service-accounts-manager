import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

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

    constructor() {
        this.showSidebar = true;
    }

    ngOnInit() {

    }

    onToggleSidebar() {
        this.showSidebar = !this.showSidebar;
        this.toggleSidebar.emit(this.showSidebar);
    }
}
