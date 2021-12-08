"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
// auto routes
const controller_1 = require("./people/controller");
const registerRoutes = (app) => {
    app.use(controller_1.route, controller_1.router);
};
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=routes.js.map