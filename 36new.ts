

import inquirer from "inquirer";
const answer = await inquirer.prompt([

    {
        type: 'input',
        name: 'name',
        message: 's'

    },
     {
        type: 'string',
        name: 'age',
        message: 'msg'

    }

]);
console.log("ghjghf" + answer.age + "hghjgh");


function make_shirt(value1: String, value2: string) {
    

 console.log("\nI'm going to make a " + value1 + " t-shirt.")
    console.log('It will say MSG , "' + value2 + '"')

 // return a * b;
}

console.log(make_shirt(answer.name,answer.age));
