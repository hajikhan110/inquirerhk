"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var answer = await inquirer_1.default.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'whay is your name?'
    },
    {
        type: 'number',
        name: 'age',
        message: 'whay is your age?'
    },
    {
        type: 'list',
        name: 'gender',
        message: 'whay is your name?',
        choices: ['Male', 'Female', 'ok1']
    }
]);
console.log("ghjghf" + answer.age + "hghjgh");
