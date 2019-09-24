var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "root",
    password: "mysql420",
    database: "bamazon"

});

connection.connect(function(err) {
    if (err) throw err;
});


console.log("-----------------------------------");
console.log("Welcome to Bamazon");
console.log("-----------------------------------");
console.log("Available Products:");


connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price);
    }
    console.log("-----------------------------------");

    buyProduct();

});


function buyProduct() {
    // query the database for all products for sale
    connection.query("SELECT * FROM products", function(err, results) {
      if (err) throw err;
      
      inquirer
        .prompt([
          {
            name: "choice",
            type: "rawlist",
            choices: function() {
              var choiceArray = [];
              for (var i = 0; i < results.length; i++) {
                choiceArray.push(results[i].id);
              }
              return choiceArray;
            },
            message: "What product (by id) would you like to buy?"
          },
          {
            name: "amount",
            type: "input",
            message: "How many would you like to buy?"
          }
        ])
        .then(function(answer) {
          
          var chosenProduct;

          for (var i = 0; i < results.length; i++) {
            if (results[i].id === answer.choice) {
              chosenProduct = results[i];
            }
          }
  
          if (chosenProduct.stock_quantity < parseInt(answer.stock_quantity)) {
            // if quantaty validates, update db, let the user know, and start over
            connection.query(
              "UPDATE stock_quantity SET ? WHERE ?",
              [
                {
                  stock_quantity: stock_quantity - answer.bid 
                },
                {
                  id: chosenItem.id
                }
              ],
              function(error) {
                if (error) throw err;
                console.log("Bought successfully!");
                start();
              }
            );
          }
          else {
            // bid wasn't high enough, so apologize and start over
            console.log("We don't have enough of that! Ener a lesser amount.");
            start();
          }
        });
    });
}