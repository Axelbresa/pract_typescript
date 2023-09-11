"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandom = exports.PI = void 0;
//varible
const PI = 3.14;
exports.PI = PI;
//function
function generateRandom() {
    return Math.floor(Math.random() * 100);
}
exports.generateRandom = generateRandom;
