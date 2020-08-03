using ServiceAccountsManager.Extensions.Results;
using ServiceAccountsManager.Services.Contracts;
using System.Web.Mvc;

namespace ServiceAccountsManager.Web.Controllers
{
    public class ClientController : Controller
    {
        private readonly IClientService ClientService;

        public ClientController(IClientService clientService)
        {
            ClientService = clientService;
        }
        
        [HttpGet]
        public JsonResult GetAllClients()
        {
            var clients = ClientService.GetAllClients();

            return new JsonNetResult() { Data = clients };
        }

        [HttpGet]
        public JsonResult GetAllClientsNames()
        {
            var clientsNames = ClientService.GetAllClientsNames();

            return Json(clientsNames, JsonRequestBehavior.AllowGet);
        }
    }
}