using NavettiClientsAccountsStatus.DomainModel;
using System.Collections.Generic;

namespace NavettiClientsAccountsStatus.Data.Contracts
{
    public interface IClientRepository
    {
        List<Client> GetAll();

        List<ClientIdentifier> GetAllClientsNames();
    }
}
