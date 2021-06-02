using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Configuration;

namespace API
{
    public static class Config
    {
        public static string GetConnectionString()
        {
            if(ConfigurationManager.ConnectionStrings["Database"] != null)
            {
                return ConfigurationManager.ConnectionStrings["Database"].ConnectionString;
            }
            else
            {
                return null;
            }
        }

        public static string GetDatabaseName()
        {
            if (ConfigurationManager.AppSettings["Database"] != null)
            {
                return ConfigurationManager.AppSettings["Database"].ToString();
            }
            else
            {
                return null;
            }
        }
    }
}
