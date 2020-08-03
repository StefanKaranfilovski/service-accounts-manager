using NavettiClientsAccountsStatus.Data.Contracts;
using NavettiClientsAccountsStatus.DomainModel;
using NavettiClientsAccountsStatus.Services.Contracts;
using System.Collections.Generic;

namespace NavettiClientsAccountsStatus.Services.Implementation
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
