using ServiceAccountsManager.Data.Contracts;
using ServiceAccountsManager.Data.Implementation.Base;
using System;
using Dapper;

namespace ServiceAccountsManager.Data.Implementation
{
    public class AccountRepository : BaseRepository, IAccountRepository
    {
        public void Delete(int accountId)
        {
            using (var db = ConnectionString)
            {
                var data = new { accountId };
                // TODO Delete record from DB
            }
        }

        public void Release(int accountId, DateTime usedTo)
        {
            using (var db = ConnectionString)
            {
                var data = new { accountId, usedTo };
                db.Execute(@"INSERT INTO AccountHistory(AccountId, ClientId, Username, [Password], UsedBy, UsedFrom, UsedTo)
                             SELECT a.Id, a.ClientId, a.Username, a.[Password], a.UsedBy, a.UsedFrom, @usedTo FROM Account a
                             WHERE Id = @accountId
                             UPDATE Account SET UsedBy = null, UsedFrom = null
                             WHERE Id = @accountId", data);
            }  
        }

        public void Use(int accountId, string usedBy, DateTime usedFrom)
        {
            using (var db = ConnectionString)
            {
                var data = new { accountId, usedBy, usedFrom };
                db.Execute(@"UPDATE Account SET UsedBy = @usedBy, UsedFrom = @usedFrom
                             WHERE Id = @accountId", data);
            }
        }
    }
}
