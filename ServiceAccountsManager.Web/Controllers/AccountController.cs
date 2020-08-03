using ServiceAccountsManager.Services.Contracts;
using System;
using System.Web.Mvc;

namespace ServiceAccountsManager.Web.Controllers
{
    public class AccountController : Controller
    {
        private readonly IAccountService AccountService;

        public AccountController(IAccountService accountService)
        {
            AccountService = accountService;
        }

        [HttpPost]
        public void UseAccount(int accountId, string usedBy, DateTime usedFrom) {
            AccountService.Use(accountId, usedBy, usedFrom);
        }

        [HttpPost]
        public void ReleaseAccount(int accountId, DateTime usedTo)
        {
            AccountService.Release(accountId, usedTo);
        }
    }
}
