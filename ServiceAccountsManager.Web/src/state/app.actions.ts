import { Action } from '@ngrx/store';
import { ClientSidebar } from '../common/models/clientSidebar';

export enum AppActionTypes {
    ToggleSidebar = '[Navbar] Toggle sidebar',
    LoadClientsNames = '[Sidebar] Load clients names',
    LoadClientsNamesSuccess = '[Sidebar] Load clients names success',
    LoadClientsNamesFailed = '[Sidebar] Load clients names failed',
    OnSelectClientName = '[Sidebar] Select client name',
    OnResetClientsSelection = '[Sidebar] Reset clients selection'
}

export class ToggleSidebar implements Action {
    readonly type = AppActionTypes.ToggleSidebar;

    constructor(public payload: boolean) { }
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
    LoadClientsNames |
    LoadClientsNamesSuccess |
    LoadClientsNamesFailed |
    OnSelectClientName |
    OnResetClientsSelection;