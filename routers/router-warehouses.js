const express = require('express');
const controllerW = require('../controllers/controllers-warehouses');

const router = express.Router();

router
  .route('/')
  .get(controllerW.getAllWarehouses)
  .post(controllerW.postNewWarehouse)
  .put(controllerW.editWarehouse)
  .delete(controllerW.deleteWarehouse);

router
  .route('/:id')
  .get(controllerW.getWarehouseById)
  .put(controllerW.editWarehouseById)
  .delete(controllerW.edeleteWarehouseById);

module.exports = router;
