#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
function add(number1, number2) {
    return number1 + number2;
}
exports.add = add;
commander_1.default
    .version('1.0.0');
commander_1.default.command('love <thing>')
    .option('-i, --I')
    .option('-h, --hate <thing>')
    .action(function (thing, option) {
    console.log('I love ', thing);
    if (option.I) {
        console.log('I hate ', option.hate);
    }
});
commander_1.default.parse(process.argv);
