import inquirer from "inquirer";

import chalk from "chalk";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operator to performs action",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division","Modulus"],
  },
]);
// condition statments
if (answer.operator === "addition") {
  console.log(chalk.blue(answer.firstNumber + answer.secondNumber));
} else if (answer.operator === "subtraction") {
  console.log(chalk.green(answer.firstNumber - answer.secondNumber));
} else if (answer.operator === "multiplication") {
  console.log(chalk.red(answer.firstNumber * answer.secondNumber));
} else if (answer.operator === "multiplication") {
  console.log(chalk.red(answer.firstNumber / answer.secondNumber));
} else if (answer.operator === "division") {
  console.log(chalk.white(answer.firstNumber % answer.secondNumber));
} else {
  console.log("enter your right number");
}
