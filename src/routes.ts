import { Router } from "express";

const routes = Router();

routes.post("/api/users", (req, res) => {
  res.status(201).send();
});

export { routes };
