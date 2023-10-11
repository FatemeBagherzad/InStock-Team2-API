const knex = require('knex')(require('../knexfile'));

const index = (_req, res) => {
  knex('01_warehouses')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Users: ${err}`));
};

exports.getAllInventory = (req, res) => {
  console.log(req);
};
exports.postNewInventory = (req, res) => {
  console.log(req);
};
exports.editInventory = (req, res) => {
  console.log(req);
};
exports.deleteInventory = (req, res) => {
  console.log(req);
};

exports.getInventoryById = (req, res) => {
  console.log(req);
};
exports.editInventoryById = (req, res) => {
  console.log(req);
};
exports.edeleteInventoryById = (req, res) => {
  console.log(req);
};
