﻿using ServiceAccountsManager.DomainModel;
using ServiceAccountsManager.Services.Contracts;
using System;
using System.Web.Mvc;

namespace ServiceAccountsManager.Web.Controllers
{
    [Authorize]
    public class AccountController : Controller
    {
        private readonly IAccountService AccountService;

        public AccountController(IAccountService accountService)
        {
            AccountService = accountService;
        }

        [HttpPost]
        public void Use(int accountId, string usedBy, DateTime usedFrom) {
            AccountService.Use(accountId, usedBy, usedFrom);
        }

        [HttpPost]
        public void Release(int accountId, DateTime usedTo)
        {
            AccountService.Release(accountId, usedTo);
        }

        [HttpPost]
        public int Add(Account account)
        {
            return AccountService.Add(account);
        }

        [HttpPost]
        public void Update(Account account)
        {
            AccountService.Update(account);
        }

        [HttpPost]
        public void Delete(int accountId)
        {
            AccountService.Delete(accountId);
        }
    }
}
