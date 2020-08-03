using System;

namespace NavettiClientsAccountsStatus.Services.Contracts
{
    public interface IAccountService
    {
        void Use(int accountId, string usedBy, DateTime usedFrom);

        void Release(int accountId, DateTime usedTo);
    }
}
