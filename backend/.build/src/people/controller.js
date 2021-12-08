"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = exports.router = void 0;
const express_joi_validation_1 = require("express-joi-validation");
const express_1 = require("express");
const service_1 = require("./service");
const schema = __importStar(require("./schema"));
exports.router = express_1.Router();
exports.route = "/human";
const validator = express_joi_validation_1.createValidator();
exports.router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_1.getAllHuman();
    res.status(200).json({});
}));
exports.router.get('/:id', validator.params(schema.get.params), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield service_1.getOneHuman(id);
    res.status(200).json({ data: result });
}));
exports.router.post('/create', validator.body(schema.create.body), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_1.createHuman(req.body);
    res.status(201).json({ data: result });
}));
exports.router.put('/:id', validator.params(schema.update.params), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield service_1.updateHuman(id, req.body);
    res.status(201).json({ data: result });
}));
exports.router.delete('/:id', validator.params(schema.deleteSchema.params), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.status(200).json({data: response.data, error: response.error});
}));
//# sourceMappingURL=controller.js.map