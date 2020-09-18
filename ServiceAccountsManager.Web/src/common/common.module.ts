import { NgModule } from '@angular/core';

import { UserService } from '../common/services/user.service';
import { ClientService } from '../common/services/client.service';
import { AccountService } from '../common/services/account.service';

@NgModule({
    providers: [
        UserService,
        ClientService,
        AccountService
    ]
})
export class CommonModule { }