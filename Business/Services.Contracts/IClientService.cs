using NavettiClientsAccountsStatus.DomainModel;
using System.Collections.Generic;

namespace NavettiClientsAccountsStatus.Services.Contracts
{
    public interface IClientService
    {
        List<Client> GetAllClients();

        List<ClientIdentifier> GetAllClientsNames();
    }
}
