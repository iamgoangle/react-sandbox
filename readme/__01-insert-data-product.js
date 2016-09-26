var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/golfdb';

var insertDocument = function(db, callback) {
   db.collection('products').insertMany( [{
	   id: 0,
	   title: 'Beer AOI',
	   desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
	   sku: 'BEER-001',
	   price: '500',
	   concurrency: '$',
	   thumbnail: 'dist/assets/images/products/bottle-2.png'
   }, {
	   id: 1,
	   title: 'Coffee',
	   desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
	   sku: 'COFF-001',
	   price: '100',
	   concurrency: '$',
	   thumbnail: 'dist/assets/images/products/coffee.png'
   }, {
	   id: 2,
	   title: 'Wine soceity',
	   desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
	   sku: 'WINE-001',
	   price: '9,000',
	   concurrency: '$',
	   thumbnail: 'dist/assets/images/products/wine.png'
   }], function(err, result) {
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
