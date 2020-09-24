import { ClientSidebar } from '../common/models/clientSidebar';

export interface AppState {
    showSidebar: boolean;
    clientsNames: ClientSidebar[],
    clientsNamesError: string
}