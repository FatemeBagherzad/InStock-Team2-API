const express = require('express');
const controllerI = require('../controllers/controllers-inventories');

const router = express.Router();

router
  .route('/inventory')
  .get(controllerI.getAllInventory)
  .post(controllerI.postNewInventory)
  .put(controllerI.editInventory)
  .delete(controllerI.deleteInventory);

router
  .route('/inventory/:id')
  .get(controllerI.getInventoryById)
  .put(controllerI.editInventoryById)
  .delete(controllerI.edeleteInventoryById);

module.exports = router;