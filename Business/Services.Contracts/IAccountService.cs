using System;

namespace ServiceAccountsManager.Services.Contracts
{
    public interface IAccountService
    {
        void Use(int accountId, string usedBy, DateTime usedFrom);

        void Release(int accountId, DateTime usedTo);

        void Delete(int accountId);
    }
}
