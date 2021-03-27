import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const routes = Router();

routes.post("/api/users", (req, res) => {
  return createUserController.handle(req, res);
});

export { routes };
