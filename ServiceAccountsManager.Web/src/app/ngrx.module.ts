import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
    imports: [
        StoreModule.forRoot({}),
        StoreDevtoolsModule.instrument({
            name: 'Service Accounts Manager',
            maxAge: 25,
            logOnly: environment.production
        })
    ]
})
export class NgrxModule { }