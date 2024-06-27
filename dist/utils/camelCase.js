"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toCamelCase = toCamelCase;
function toCamelCase(str) {
    return str
        .toLowerCase()
        .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase())
        .replace(/\s+/g, '');
}
