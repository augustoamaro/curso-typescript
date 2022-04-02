"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const livro_1 = __importDefault(require("./model/livro"));
const livro = new livro_1.default("Dom Quixote", 99.99, 0.1);
console.log(livro.precoComDesconto());
