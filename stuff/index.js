var inquirer = require('inquirer');
const program = require('commander');
const items = require('./lib/items');
const newItem = require('./lib/addItem');
const update = require('./lib/editItem')
//console.log("something")

/* program
    .option('-v, --viewItems', 'View all items')
    .option('-a, --addItem', 'Adds a new item')
    .option('-e, --editItem', 'Edit an item')
    .option('-d, --deleteItem', 'Delete an item') */
program
    .command('addItem')
    .action(function(){
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "productName",
                    message: "Please enter the product name"
                },
                {
                    type: "input",
                    name: "title",
                    message: "Please enter the product title"
                },
                {
                    type: "input",
                    name: "description",
                    message: "Please enter the product description"
                },
                {
                    type: "input",
                    name: "price",
                    message: "Please enter the product price"
                }
            ])
            .then(answers => {
                newItem.addItem(answers.productName, answers.title, answers.description, answers.price);
            });
    });
program
    .command('viewItems')
    .action(() => {
        items();
    });

program
    .command('editItem')
    .action(function(){
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "productName",
                    message: "Please enter the name of the product you want to update"
                },
                {
                    type: "input",
                    name: "title",
                    message: "Please enter the new title"
                },
                {
                    type: "input",
                    name: "description",
                    message: "Please enter the new description"
                },
                {
                    type: "input",
                    name: "price",
                    message: "Please enter the new price"
                }
            ])
            .then(answers => {
                update.editItem(answers.productName, answers.title, answers.description, answers.price)
            })
    })

program.parse(process.argv);

/* const greet = require('./lib/greet');
console.log(greet.greetRandom()); */