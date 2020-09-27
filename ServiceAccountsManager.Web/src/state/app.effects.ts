import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ClientService } from '../common/services/client.service';
import * as appActions from '../state/app.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ClientSidebar } from '../common/models/clientSidebar';
import { of } from 'rxjs';
import { UserService } from '../common/services/user.service';

@Injectable()
export class AppEffects {
    constructor(private _actions$: Actions, private _clientService: ClientService, private _userService: UserService) { }

    @Effect()
    getClientsNames$ = this._actions$.pipe(
        ofType(appActions.AppActionTypes.LoadClientsNames),
        mergeMap((action: appActions.LoadClientsNames) => this._clientService.getClientsNames().pipe(
            map((clientsNames: ClientSidebar[]) => (new appActions.LoadClientsNamesSuccess(clientsNames))),
            catchError(error => of(new appActions.LoadClientsNamesFailed(error)))
        ))
    );

    @Effect()
    getCurrentUsername$ = this._actions$.pipe(
        ofType(appActions.AppActionTypes.GetCurrentUsername),
        mergeMap((action: appActions.GetCurrentUsername) => this._userService.getCurrentUser().pipe(
            map((currentUsername: string) => (new appActions.GetCurrentUsernameSuccess(currentUsername))),
            catchError(error => of(new appActions.GetCurrentUsernameFailed(error)))
        ))
    )
}
