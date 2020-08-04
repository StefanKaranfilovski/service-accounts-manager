import { Account } from "./account";
import { ClientIdentifier } from "./clientIdentifier";

export class Client extends ClientIdentifier {
    Description: string;
    PictureUrl: string;
    Accounts: Account[];
}
