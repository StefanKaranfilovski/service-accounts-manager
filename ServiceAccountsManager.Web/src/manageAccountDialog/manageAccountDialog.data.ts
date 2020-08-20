export class ManageAccountDialogData {
    title: string;
    username: string;
    password: string;
    clientId: number;
    accountId?: number;

    constructor(title: string, username: string, password: string, clientId: number, accountId?: number) {
        this.title = title;
        this.username = username;
        this.password = password;
        this.clientId = clientId;
        this.accountId = accountId;
    };
}
