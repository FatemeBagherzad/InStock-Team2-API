const knex = require("knex")(require("../knexfile"));
const uniqid = require("uniqid");

exports.getAllInventory = (req, res) => {
  knex("inventories")
    .then((data) => {
      res.status(200).json(data);
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
  knex("inventories")
    .insert(req.body)
    .then((result) => {
      return knex("inventories").where({ id: result[0] });
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: `Unable to retrieve Inventory `,
      });
    });
};

exports.editInventory = (req, res) => {
  console.log("req");
};

exports.deleteInventoryById = (req, res) => {
  knex("inventories")
    .where({ id: req.params.id })
    .del()
    .then((result) => {
      if (result === 0) {
        return res.status(400).json({
          message: `Inventory ID: ${req.params.id} to be deleted not found.`,
        });
      }
      // no content response
      res.status(204).send();
    })
    .catch((err) => {
      res.status(500).json({ message: "Unable to delete user" });
    });
};

exports.editInventoryById = (req, res) => {
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

