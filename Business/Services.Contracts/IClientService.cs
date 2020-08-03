using ServiceAccountsManager.DomainModel;
using System.Collections.Generic;

namespace ServiceAccountsManager.Services.Contracts
{
    public interface IClientService
    {
        List<Client> GetAllClients();

        List<ClientIdentifier> GetAllClientsNames();
    }
}
