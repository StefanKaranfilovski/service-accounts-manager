using System.Web.Mvc;

namespace ServiceAccountsManager.Web.Controllers
{
    public class UserController : Controller
    {
        public string GetCurrentUsername()
        {
            return User.Identity.Name;
        }
    }
}