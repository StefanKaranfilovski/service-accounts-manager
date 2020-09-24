import { AppActions, AppActionTypes } from "./app.actions";
import { AppState } from './app.state';
import { createFeatureSelector, createSelector, UPDATE } from '@ngrx/store';
import { ClientSidebar } from '../common/models/clientSidebar';

const getAppState = createFeatureSelector<AppState>('appState');

export const getShowSidebar = createSelector(
    getAppState,
    state => state.showSidebar
);

export const getClientsNames = createSelector(
    getAppState,
    state => state.clientsNames
);

export const getClientsNamesError = createSelector(
    getAppState,
    state => state.clientsNamesError
);

const initialState: AppState = {
    showSidebar: true,
    clientsNames: [],
    clientsNamesError: ''
};

export function reducer(state = initialState, action: AppActions): AppState {
    switch (action.type) {
        
        case AppActionTypes.ToggleSidebar:
            return {
                ...state,
                showSidebar: action.payload
            };

        case AppActionTypes.LoadClientsNamesSuccess:
            return {
                ...state,
                clientsNames: action.payload,
                clientsNamesError: ''
            };

        case AppActionTypes.LoadClientsNamesFailed:
            return {
                ...state,
                clientsNames: [],
                clientsNamesError: action.payload
            };

        case AppActionTypes.OnSelectClientName:
            let updatedClientsNames: ClientSidebar[] = [];
            for (var i = 0; i < state.clientsNames.length; i++) {
                let entry = new ClientSidebar();
                entry.Id = state.clientsNames[i].Id;
                entry.Name = state.clientsNames[i].Name;
                entry.Checked = state.clientsNames[i].Id === action.payload ? true : false;

                updatedClientsNames.push(entry)
            }

            return {
                ...state,
                clientsNames: updatedClientsNames
            };

        case AppActionTypes.OnResetClientsSelection:
            let resetClientsNames: ClientSidebar[] = [];
            for (var i = 0; i < state.clientsNames.length; i++) {
                let entry = new ClientSidebar();
                entry.Id = state.clientsNames[i].Id;
                entry.Name = state.clientsNames[i].Name;
                entry.Checked = false;

                resetClientsNames.push(entry)
            }

            return {
                ...state,
                clientsNames: resetClientsNames
            };

        default:
            return state;
    }
}
