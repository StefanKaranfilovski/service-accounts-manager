import { Component, OnInit } from '@angular/core';
import { ClientService } from '../common/services/client.service';
import { ClientSidebar } from '../common/models/clientSidebar';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    clientsStatus: ClientSidebar[] = [];

    constructor(private _clientService: ClientService) { }

    ngOnInit() {
        this._clientService.getClientsNames().subscribe(clientNames => {
            for (var i = 0, length = clientNames.length; i < length; i++) {
                this.clientsStatus.push({
                    Id: clientNames[i].Id,
                    Name: clientNames[i].Name,
                    Checked: false
                });
            }
        });
    };

    onClientClick(clientId: number): void {
        for (var i = 0, length = this.clientsStatus.length; i < length; i++) {
            var currentEntry = this.clientsStatus[i];
            if (currentEntry.Id === clientId) {
                currentEntry.Checked = true;
            } else {
                currentEntry.Checked = false;
            }
        }
    };

    resetClientSelection(): void {
        for (var i = 0, length = this.clientsStatus.length; i < length; i++) {
            this.clientsStatus[i].Checked = false;
        }
    };
}
