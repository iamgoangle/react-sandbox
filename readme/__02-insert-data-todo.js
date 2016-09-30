var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/golfdb';

var insertDocument = function(db, callback) {
   db.collection('todos').insertMany( [
     {
       "id": 0,
       "name": "Teerapong Singthong",
       "status": "Employed"
     },
     {
       "id": 1,
       "name": "Porntheera Apirachkul",
       "status": "Employed"
     },
     {
       "id": 2,
       "name": "Golf Test",
       "status": "Unemployed"
     }
   ]
, function(err, result) {
    assert.equal(err, null);
    console.log("Inserted a document into the restaurants collection.");
    callback();
  });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  insertDocument(db, function() {
      db.close();
  });
});
