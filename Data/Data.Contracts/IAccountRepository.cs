using System;

namespace ServiceAccountsManager.Data.Contracts
{
    public interface IAccountRepository
    {
        void Release(int accountId, DateTime usedTo);

        void Use(int accountId, string usedBy, DateTime usedFrom);
    }
}
