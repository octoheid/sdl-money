using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;

namespace API.Objects
{
    public class DB_Request
    {
        public string collection { get; set; }
        public BsonDocument query { get; set; }
        public BsonDocument projection { get; set; }
        public long start { get; set; }
        public long limit { get; set; }


    }
}
