import { NgModule } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/navbar.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature('navbar', reducer)
    ],
    declarations: [
        NavbarComponent
    ],
    exports: [
        NavbarComponent
    ]
})
export class NavbarModule { }