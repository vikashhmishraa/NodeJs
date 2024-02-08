const express = require("express");
const UserSchemaModel = require("../model/users");
const mongoose = require("mongoose");
const {
  handleGetAllUsers,
  handleGetUserById,
  handleCreateNewUser,
  HandleUpdateUser,
  handleDeleteUser,
  handleDynamicResponse,
  handleFsFileDataCreate,
  handleFsFileDataView,
  handleServerSideRenderedData,
} = require("../controllers/users");
const router = express.Router();

// Server Side Rendered Page
router.get("/users", handleServerSideRenderedData);

// REST API
router.get("/", handleDynamicResponse);
// Dynamic Routes
router.get("/api/users", handleGetAllUsers);
router.get("/api/users/:id", handleGetUserById);
router.post("/api/newUsers", handleCreateNewUser);
router.put("/api/userss/:id", HandleUpdateUser);
router.delete("/api/userss/:id", handleDeleteUser);

router
  .route("/api/users")
  .get(handleFsFileDataView)
  .post(handleFsFileDataCreate)
  .put(HandleUpdateUser)
  .delete(handleDeleteUser);

module.exports = router;
