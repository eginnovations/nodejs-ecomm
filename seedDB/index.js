const mongoose = require('mongoose');

const product = require('./products-seed');
const category = require('./category-seed');

exports.init = function () {
  if (!mongoose.connection || !mongoose.connection.db) return;
  mongoose.connection.db.listCollections({ name: 'products' }).next(async (err, products) => {
    if (err) console.error(err);
    else if (!products) {
      console.log('Starting DB Seeder......!');
      await category.seedDB();
      product.seedDB();
      console.log('DB Seeder Completed......!');
    }
  });
}