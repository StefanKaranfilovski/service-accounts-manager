using ServiceAccountsManager.DomainModel;
using System;

namespace ServiceAccountsManager.Data.Contracts
{
    public interface IAccountRepository
    {
        void Release(int accountId, DateTime usedTo);

        void Use(int accountId, string usedBy, DateTime usedFrom);

        int Add(Account account);

        void Update(Account account);

        void Delete(int accountId);
    }
}
