import {Express} from "express";

// auto routes
import {route as humanRoute, router as humanRouter} from "./people/controller";
import {route as starShipRoute, router as starShipRouter} from "./starships/controller";


const registerRoutes = (app: Express) => {
  app.use(humanRoute, humanRouter);
  app.use(starShipRoute, starShipRouter)
};

export {
  registerRoutes
}