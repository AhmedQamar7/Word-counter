import inquirer from "inquirer";
const { sentence } = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence to count the words: ",
    },
]);
const words = sentence.trim().split(/\s+/);
console.log(`Your sentence word count is ${words.length}`);
