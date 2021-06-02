using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Objects;

using MongoDB.Driver;
using MongoDB.Bson;

namespace API.DataLayer
{
    public static class DB_GetData
    {

        public static DB_Result GetData(DB_Request request)
        {
            MongoClient dbClient = new MongoClient(API.Config.GetConnectionString());
            IMongoDatabase database = dbClient.GetDatabase(Config.GetDatabaseName());
            IMongoCollection<BsonDocument> collection = database.GetCollection<BsonDocument>(request.collection);


            collection.Find(request.query);


            DB_Result result = new DB_Result();
            result.count = collection.CountDocuments(request.query);

            var cursor = collection.Find<BsonDocument>(request.query).ToCursor();
            while (cursor.MoveNext())
            {
                var batch = cursor.Current;
                foreach (var doc in batch)
                {
                    result.result.Add(doc);
                }
            }

            return result;
            
        }

    }
}
