using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;

namespace API.Objects
{
    public class DB_Result
    {
        public BsonArray result { get; set; }
        public long count { get; set; }
    }
}
