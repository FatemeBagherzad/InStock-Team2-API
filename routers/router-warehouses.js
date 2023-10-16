const express = require("express");
const controllerW = require("../controllers/controllers-warehouses");
const router = express.Router();
router
  .route("/")
  .get(controllerW.getAllWarehouses)
<<<<<<< HEAD
  .post(controllerW.postNewWarehouse)
  .put(controllerW.editWarehouse);
=======
  .post(controllerW.postNewWarehouse);
>>>>>>> master

router
  .route("/:id")
  .get(controllerW.getWarehouseById)
  .put(controllerW.editWarehouseById)
  .delete(controllerW.deleteWarehouseById);
<<<<<<< HEAD
=======

>>>>>>> master
module.exports = router;
