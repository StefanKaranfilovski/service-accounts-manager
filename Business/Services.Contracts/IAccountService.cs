using ServiceAccountsManager.DomainModel;
using System;

namespace ServiceAccountsManager.Services.Contracts
{
    public interface IAccountService
    {
        void Use(int accountId, string usedBy, DateTime usedFrom);

        void Release(int accountId, DateTime usedTo);

        int Add(Account account);

        void Update(Account account);

        void Delete(int accountId);
    }
}
