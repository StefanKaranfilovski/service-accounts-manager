using Dapper;
using NavettiClientsAccountsStatus.Data.Contracts;
using NavettiClientsAccountsStatus.Data.Implementation.Base;
using NavettiClientsAccountsStatus.DomainModel;
using System.Collections.Generic;
using System.Linq;

namespace NavettiClientsAccountsStatus.Data.Implementation
{
    public class ClientRepository : BaseRepository, IClientRepository
    {
        public List<Client> GetAll()
        {
            using (var db = ConnectionString)
            {
                var clients = db.Query<Client>("SELECT * FROM Client").ToList();
                var accounts = db.Query<Account>("SELECT * FROM Account").ToList();
                AddAccountsToClients(clients, accounts);

                return clients;
            }
        }

        private void AddAccountsToClients(IEnumerable<Client> clients, IEnumerable<Account> accounts)
        {
            foreach (var account in accounts)
            {
                var clientFound = clients.SingleOrDefault(x => x.Id == account.ClientId);
                if (clientFound != null)
                {
                    clientFound.Accounts.Add(account);
                }
            }
        }

        public List<ClientIdentifier> GetAllClientsNames()
        {
            using (var db = ConnectionString)
            {
                return db.Query<ClientIdentifier>("SELECT Id, Name FROM Client").ToList();
            }
        }
    }
}
