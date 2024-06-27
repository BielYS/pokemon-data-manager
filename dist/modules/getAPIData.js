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
exports.getAPIData = getAPIData;
const axios_1 = __importDefault(require("axios"));
function getAPIData(url_1) {
    return __awaiter(this, arguments, void 0, function* (url, limit = 150) {
        try {
            let offset = 0;
            const allData = [];
            while (allData.length < limit) {
                const response = yield axios_1.default.get(`${url}?limit=20&offset=${offset}`);
                allData.push(...response.data.results);
                offset += 20;
            }
            return allData.slice(0, limit);
        }
        catch (error) {
            console.error('Error fetching data: ', error);
            throw error;
        }
    });
}
