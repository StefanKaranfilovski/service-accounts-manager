using System;

namespace ServiceAccountsManager.DomainModel
{
    public class Account
    {
        public int Id { get; set; }

        public int ClientId { get; set; }


        public string Username { get; set; }

        public string Password { get; set; }

        public string UsedBy { get; set; }


        public DateTime? UsedFrom { get; set; }

        public DateTime? UsedTo { get; set; }
    }
}
