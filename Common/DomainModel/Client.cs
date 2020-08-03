using System.Collections.Generic;

namespace NavettiClientsAccountsStatus.DomainModel
{
    public class Client : ClientIdentifier
    {
        public Client()
        {
            Accounts = new List<Account>();
        }
        
        public string Description { get; set; }

        public string PictureUrl { get; set; }


        public List<Account> Accounts { get; set; }
    }
}
