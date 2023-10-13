const knex = require('knex')(require('../knexfile'));

exports.getAllWarehouses = (req, res) => {
  knex('warehouses')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving data: ${err}`));
  console.log('req');
};
exports.postNewWarehouse = (req, res) => {
  console.log('req');
};
exports.editWarehouse = (req, res) => {
  console.log('req');
};
exports.deleteWarehouse = (req, res) => {
  console.log('req');
};

exports.getWarehouseById = (req, res) => {
  console.log('req');
};
exports.editWarehouseById = (req, res) => {
  console.log('req');
};
exports.edeleteWarehouseById = (req, res) => {
  console.log('req');
};
