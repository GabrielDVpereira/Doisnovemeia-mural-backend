const express = require("express");
const MemberController = require("./controllers/MemberController");
const routes = express.Router();
const multerConfig = require("./config/multer");
const multer = require("multer");

const uoloadFile = multer(multerConfig);

routes.get("/member", MemberController.index);
routes.post("/member", uoloadFile.single("photo"), MemberController.create);
routes.delete("/member/:id", MemberController.delete);
routes.put("/member/:id", MemberController.update);

module.exports = routes;
