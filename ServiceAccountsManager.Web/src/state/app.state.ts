import { ClientSidebar } from '../common/models/clientSidebar';

export interface AppState {
    showSidebar: boolean;
    username: string;
    usernameError: string;
    clientsNames: ClientSidebar[],
    clientsNamesError: string
}