const express = require("express");
const MemberController = require("./controllers/MemberController");
const routes = express.Router();

routes.get("/member", MemberController.index);
routes.post("/member", MemberController.create);
routes.delete("/member/:id", MemberController.delete);
routes.put("/member/:id", MemberController.update);

module.exports = routes;
