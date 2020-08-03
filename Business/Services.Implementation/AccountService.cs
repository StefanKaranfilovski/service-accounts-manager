using NavettiClientsAccountsStatus.Data.Contracts;
using NavettiClientsAccountsStatus.Services.Contracts;
using System;

namespace NavettiClientsAccountsStatus.Services.Implementation
{
    public class AccountService : IAccountService
    {
        private readonly IAccountRepository AccountRepository;

        public AccountService(IAccountRepository accountRepository)
        {
            AccountRepository = accountRepository;
        }

        public void Release(int accountId, DateTime usedTo)
        {
            AccountRepository.Release(accountId, usedTo);
        }

        public void Use(int accountId, string usedBy, DateTime usedFrom)
        {
            AccountRepository.Use(accountId, usedBy, usedFrom);
        }
    }
}
