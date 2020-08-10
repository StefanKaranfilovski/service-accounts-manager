import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
    showSidebar: boolean = true;
    currentUser: string;

    constructor(private _userService: UserService) {

    };

    ngOnInit() {
        this._userService.getCurrentUser().subscribe(
            (username) => {
                this.currentUser = username;
            },
            (error) => {
                console.log(error);
            }
        );
    };

    onToggleSidebar(showSidebar: boolean){
        this.showSidebar = showSidebar;
    };
}
