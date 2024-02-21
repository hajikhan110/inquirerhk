import inquirer from "inquirer";
const answer = await inquirer.prompt([

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
        choices: ['Male','Female','ok1']

    }

]);
console.log(answer.age);