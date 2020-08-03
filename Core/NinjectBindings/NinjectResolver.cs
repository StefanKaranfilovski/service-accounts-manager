using ServiceAccountsManager.Data.Contracts;
using ServiceAccountsManager.Data.Implementation;
using ServiceAccountsManager.Services.Contracts;
using ServiceAccountsManager.Services.Implementation;
using Ninject;
using System;
using System.Collections.Generic;

namespace ServiceAccountsManager.Web.App_Start
{
    public class NinjectResolver : System.Web.Mvc.IDependencyResolver
    {
        private readonly IKernel _kernel;

        public NinjectResolver()
        {
            _kernel = new StandardKernel();
            AddBindings();
        }

        public object GetService(Type serviceType)
        {
            return _kernel.TryGet(serviceType);
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            return _kernel.GetAll(serviceType);
        }

        private void AddBindings()
        {
            AddServicesBindings();
            AddRepositoriesBindings();
        }

        private void AddServicesBindings()
        {
            _kernel.Bind<IClientService>().To<ClientService>();
            _kernel.Bind<IAccountService>().To<AccountService>();
        }

        private void AddRepositoriesBindings()
        {
            _kernel.Bind<IClientRepository>().To<ClientRepository>();
            _kernel.Bind<IAccountRepository>().To<AccountRepository>();
        }
    }
}