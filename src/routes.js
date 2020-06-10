const express = require("express");
const MemberController = require("./controllers/MemberController");
const AdminController = require("./controllers/AdminController");
const routes = express.Router();
const multerConfig = require("./config/multer");
const multer = require("multer");
const authMiddleware = require("./middlewares/auth");
const fieldVerification = require("./middlewares/fieldVerification");
const uoloadFile = multer(multerConfig);

routes.post("/admin/create", fieldVerification.auth, AdminController.create);
routes.post("/admin/auth", AdminController.auth);
routes.get("/members", MemberController.index);

routes.use(authMiddleware);
routes.post(
  "/member",
  uoloadFile.single("photo"),
  fieldVerification.member,
  MemberController.create
);
routes.delete("/member/:id", MemberController.delete);
routes.put("/member/:id", MemberController.update);

module.exports = routes;
