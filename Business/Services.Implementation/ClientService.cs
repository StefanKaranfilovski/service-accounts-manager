using ServiceAccountsManager.Data.Contracts;
using ServiceAccountsManager.DomainModel;
using ServiceAccountsManager.Services.Contracts;
using System.Collections.Generic;

namespace ServiceAccountsManager.Services.Implementation
{
    public class ClientService : IClientService
    {
        private readonly IClientRepository ClientRepository;

        public ClientService(IClientRepository clientRepository)
        {
            ClientRepository = clientRepository;
        }

        public List<Client> GetAllClients()
        {
            return ClientRepository.GetAll();
        }

        public List<ClientIdentifier> GetAllClientsNames()
        {
            return ClientRepository.GetAllClientsNames();
        }
    }
}
