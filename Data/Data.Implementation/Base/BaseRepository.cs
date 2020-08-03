using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace NavettiClientsAccountsStatus.Data.Implementation.Base
{
    public class BaseRepository
    {
        public IDbConnection ConnectionString { get; set; }

        public BaseRepository()
        {
            ConnectionString = new SqlConnection(ConfigurationManager.ConnectionStrings["ClientsStatus"].ConnectionString);
        }
    }
}
