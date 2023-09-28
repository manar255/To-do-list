const mongodb = require("mongodb");

const mongoClient = mongodb.MongoClient;

let _db;
const mongoConnect = (cb) => {
  mongoClient
    .connect(
      "mongodb+srv://manarkhaled25599:todolistpassword@cluster0.ufmudcr.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((client) => {
      console.log("conected!");
      _db= client.db();
      cb();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = ()=>{
  if(_db)
  {
    return _db;
  }
  throw 'No Found Database';
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
