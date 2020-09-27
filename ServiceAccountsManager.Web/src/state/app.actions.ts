import { Action } from '@ngrx/store';
import { ClientSidebar } from '../common/models/clientSidebar';

export enum AppActionTypes {
    ToggleSidebar = '[Navbar] Toggle sidebar',
    GetCurrentUsername = '[Navbar] Get current username',
    GetCurrentUsernameSuccess = '[Navbar] Get current username success',
    GetCurrentUsernameFailed = '[Navbar] Get current username failed',
    LoadClientsNames = '[Sidebar] Load clients names',
    LoadClientsNamesSuccess = '[Sidebar] Load clients names success',
    LoadClientsNamesFailed = '[Sidebar] Load clients names failed',
    OnSelectClientName = '[Sidebar] Select client name',
    OnResetClientsSelection = '[Sidebar] Reset clients selection'
}

export class ToggleSidebar implements Action {
    readonly type = AppActionTypes.ToggleSidebar;

    constructor() { }
}

export class GetCurrentUsername implements Action {
    readonly type = AppActionTypes.GetCurrentUsername;

    constructor() { }
}

export class GetCurrentUsernameSuccess implements Action {
    readonly type = AppActionTypes.GetCurrentUsernameSuccess;

    constructor(public payload: string) { }
}

export class GetCurrentUsernameFailed implements Action {
    readonly type = AppActionTypes.GetCurrentUsernameFailed;

    constructor(public payload: string) { }
}

export class LoadClientsNames implements Action {
    readonly type = AppActionTypes.LoadClientsNames;

    constructor() { }
}

export class LoadClientsNamesSuccess implements Action {
    readonly type = AppActionTypes.LoadClientsNamesSuccess;

    constructor(public payload: ClientSidebar[]) { }
}

export class LoadClientsNamesFailed implements Action {
    readonly type = AppActionTypes.LoadClientsNamesFailed;

    constructor(public payload: string) { }
}

export class OnSelectClientName implements Action {
    readonly type = AppActionTypes.OnSelectClientName;

    constructor(public payload: number) { }
}

export class OnResetClientsSelection implements Action {
    readonly type = AppActionTypes.OnResetClientsSelection;

    constructor() { }
}

export type AppActions =
    ToggleSidebar |
    GetCurrentUsername |
    GetCurrentUsernameSuccess |
    GetCurrentUsernameFailed |
    LoadClientsNames |
    LoadClientsNamesSuccess |
    LoadClientsNamesFailed |
    OnSelectClientName |
    OnResetClientsSelection;