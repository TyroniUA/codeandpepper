"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initApp = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
exports.initApp = () => __awaiter(void 0, void 0, void 0, function* () {
    const app = express_1.default();
    const port = 3000;
    app.use(cors_1.default);
    app.use(express_1.default.json());
    routes_1.registerRoutes(app);
    app.get('/', (req, res) => {
        console.log('click');
        res.send('Hello World!');
    });
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
});
//# sourceMappingURL=app.js.map