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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHuman = exports.getOneHuman = exports.updateHuman = exports.getAllHuman = void 0;
const Human_1 = require("../models/Human");
const getAllHuman = () => __awaiter(void 0, void 0, void 0, function* () {
    const listOfHumans = yield Human_1.Human.findAll();
    return listOfHumans;
});
exports.getAllHuman = getAllHuman;
const getOneHuman = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const oneHuman = yield Human_1.Human.findByPk(id);
    return oneHuman;
});
exports.getOneHuman = getOneHuman;
const updateHuman = (id, human) => __awaiter(void 0, void 0, void 0, function* () {
    const humanById = yield Human_1.Human.findByPk(id);
    const updatedHuman = yield humanById.update(Object.assign({}, human));
    return updatedHuman;
});
exports.updateHuman = updateHuman;
const createHuman = (human) => __awaiter(void 0, void 0, void 0, function* () {
    const createdHuman = yield Human_1.Human.create(Object.assign({}, human));
    return createdHuman;
});
exports.createHuman = createHuman;
//# sourceMappingURL=service.js.map