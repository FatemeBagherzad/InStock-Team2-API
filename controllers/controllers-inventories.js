const knex = require("knex")(require("../knexfile"));

exports.getAllInventory = (req, res) => {
  knex("inventories")
    .then((data) => {
      res.status(200).json(data);
      console.log("In I");
    })
    .catch((err) => res.status(400).send(`Error retrieving data: ${err}`));
};
exports.getInventoryById = (req, res) => {
  knex("inventories")
    .where({ id: req.params.id })
    .then((inventory) => {
      if (inventory.length === 0) {
        return res
          .status(404)
          .json({ message: `Inventory with ID: ${req.params.id} not found` });
      }
      const inventoryData = inventory;
      res.status(200).json(inventoryData);
      console.log(inventoryData);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve inventory data for inventory with ID: ${req.params.id}`,
      });
    });
};
exports.postNewInventory = (req, res) => {
  console.log("req");
};
exports.editInventory = (req, res) => {
  console.log("req");
};
exports.deleteInventory = (req, res) => {
  console.log("req");
};
exports.editInventoryById = (req, res) => {
  console.log("req");
};
exports.edeleteInventoryById = (req, res) => {
  console.log("req");
};

// Get an Inventory Item by ID
exports.getInventoryById = (req, res) => {
  knex("inventories")
    .where({ id: req.params.id })
    .then((inventory) => {
      if (inventory.length === 0) {
        return res
          .status(404)
          .json({ message: `Inventory with ID: ${req.params.id} not found` });
      }
      const inventoryData = inventory[0];
      res.status(200).json(inventoryData);
    })
    .catch(() => {
      res.status(500).json({
        message: `Unable to retrieve inventory data for inventory with ID: ${req.params.id}`,
      });
    });
};

exports.updateInventoryById = (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  knex("inventories")
    .where({ id })
    .update(updatedData)
    .then(() => {
      res
        .status(200)
        .json({ message: `Inventory with ID ${id} has been updated` });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
};
