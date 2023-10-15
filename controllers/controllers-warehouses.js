const knex = require('knex')(require('../knexfile'));

exports.getAllWarehouses = (req, res) => {
  knex('warehouses')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving data: ${err}`));
};

exports.postNewWarehouse = (req, res) => {
  knex('warehouses')
    .insert(req.body)
    .then((result) => {
      console.log(result[0]);
      return knex('warehouses').where({ id: result[0] });
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: `Unable to retrieve warehouse `,
      });
    });
};

exports.editWarehouse = (req, res) => {
  console.log('req');
};

exports.getWarehouseById = (req, res) => {
  knex('warehouses')
    .where({ id: req.params.id })
    .then((warehouse) => {
      if (warehouse.length === 0) {
        return res
          .status(404)
          .json({ message: `Warehouse with ID: ${req.params.id} not found` });
      }

      const warehouseData = warehouse;

      res.status(200).json(warehouseData);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve warehouse data for warehouse with ID: ${req.params.id}`,
      });
    });
};

exports.editWarehouseById = (req, res) => {
  console.log('req');
};

exports.deleteWarehouseById = (req, res) => {
  console.log('req');
};
