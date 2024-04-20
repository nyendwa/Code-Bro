
class Product{
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    displayMethod() {
        console.log("Product: " + this.name);
        console.log("Price: $" + this.price.toFixed(2));
    }
    calculateTax(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = .16;
var product = new Product("Coffee", 2.90);
const total = product.calculateTax(salesTax);
product.displayMethod();
console.log(total);