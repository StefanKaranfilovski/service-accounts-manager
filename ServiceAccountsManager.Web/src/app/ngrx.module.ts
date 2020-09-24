import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducer } from '../state/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from '../state/app.effects';

@NgModule({
    imports: [
        StoreModule.forRoot({ appState: reducer }),
        EffectsModule.forRoot([AppEffects]),
        StoreDevtoolsModule.instrument({
            name: 'Service Accounts Manager',
            maxAge: 25,
            logOnly: environment.production
        })
    ]
})
export class NgrxModule { }