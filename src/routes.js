const express = require("express");
const MemberController = require("./controllers/MemberController");
const AdminController = require("./controllers/AdminController");
const routes = express.Router();
const multerConfig = require("./config/multer");
const multer = require("multer");
const authMiddleware = require("./middlewares/auth");

const uoloadFile = multer(multerConfig);

routes.post("/admin/create", AdminController.create);
routes.post("/admin/auth", AdminController.auth);

routes.use(authMiddleware);
routes.get("/member", MemberController.index);
routes.post("/member", uoloadFile.single("photo"), MemberController.create);
routes.delete("/member/:id", MemberController.delete);
routes.put("/member/:id", MemberController.update);

module.exports = routes;
