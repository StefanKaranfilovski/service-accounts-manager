using ServiceAccountsManager.DomainModel;
using System.Collections.Generic;

namespace ServiceAccountsManager.Data.Contracts
{
    public interface IClientRepository
    {
        List<Client> GetAll();

        List<ClientIdentifier> GetAllClientsNames();
    }
}
