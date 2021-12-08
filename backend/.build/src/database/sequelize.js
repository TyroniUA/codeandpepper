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
exports.MainDB = exports.initDB = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const database_1 = __importDefault(require("../../db/database"));
const human_1 = require("../models/human");
const starships_1 = require("../models/starships");
/**
 * If we have more than one DB - it's a good approach to have such initialization. For example separate DB for analytics.
 */
exports.initDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const environment = process.env.NODE_ENV || 'development';
    const env = database_1.default[environment];
    console.log(env);
    console.log("using environment <", environment, "> for data db init");
    const instance = new MainDB();
    instance.init(env);
    yield instance.sync();
});
class MainDB {
    init(env) {
        const main = new sequelize_typescript_1.Sequelize({
            dialect: 'postgres',
            host: env.host,
            port: env.port,
            database: env.database,
            username: env.username,
            password: env.password,
            pool: {
                max: 8,
                min: 0,
                acquire: 60000,
                idle: 20000
            },
            models: [
                human_1.Human,
                starships_1.StarShip
            ]
        });
        this.instance = main;
    }
    sync() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.instance.sync({ force: false, alter: true });
        });
    }
}
exports.MainDB = MainDB;
//# sourceMappingURL=sequelize.js.map