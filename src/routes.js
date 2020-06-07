import express from "express";

const routes = express.Router();

routes.get("/teste", (req, res) => {
  res.send("Hello doisnove meia");
});

export default routes;
