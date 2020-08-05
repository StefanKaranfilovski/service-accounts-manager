using ServiceAccountsManager.Data.Contracts;
using ServiceAccountsManager.Services.Contracts;
using System;

namespace ServiceAccountsManager.Services.Implementation
{
    public class AccountService : IAccountService
    {
        private readonly IAccountRepository AccountRepository;

        public AccountService(IAccountRepository accountRepository)
        {
            AccountRepository = accountRepository;
        }

        public void Delete(int accountId)
        {
            AccountRepository.Delete(accountId);
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
