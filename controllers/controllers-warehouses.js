const knex = require("knex")(require("../knexfile"));

exports.getAllWarehouses = (req, res) => {
  knex("warehouses")
    .then((data) => {
      res.status(200).json(data);
      console.log("In W");
    })
    .catch((err) => res.status(400).send(`Error retrieving data: ${err}`));
  console.log("req");
};
exports.postNewWarehouse = (req, res) => {
  console.log("req");
};
exports.editWarehouse = (req, res) => {
  console.log("req");
};
exports.deleteWarehouse = (req, res) => {
  console.log("req");
};

exports.getWarehouseById = (req, res) => {
  knex("warehouses")
    .where({ id: req.params.id })
    .then((warehouse) => {
      if (warehouse.length === 0) {
        return res
          .status(404)
          .json({ message: `Warehouse with ID: ${req.params.id} not found` });
      }
      const warehouseData = warehouse;
      console.log(warehouseData);
      return res.status(200).json(warehouseData);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve warehouse data for warehouse with ID: ${req.params.id}`,
      });
    });
  console.log("req");
};
exports.editWarehouseById = (req, res) => {
  console.log("req");
};
exports.edeleteWarehouseById = (req, res) => {
  console.log("req");
};
