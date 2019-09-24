CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products
(
	id int NOT NULL AUTO_INCREMENT,
	product_name varchar(100) NOT NULL,
    department_name varchar(100) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity int not null,
	PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Lamborghini Car', 'Automobiles', 500000, 1);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ("Men's Underwear 4-pk", 'Clothing', 25.99, 15672);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Wine Glasses 12-pk', 'Dinnerware', 50.99, 20034);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Rug', 'Furniture', 250.00, 567);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Fake Tree', 'Furniture', 45.99, 3295);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Fishtank 100-gal', 'Pet Accessories', 2499.99, 69);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Basketball', 'Sports Gear', 24.99, 180083);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Chair', 'Furniture', 49.99, 34531);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Forks', 'Dinnerware', 9.99, 15543);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Dog Leash', 'Pet Accessories', 19.99, 5933);