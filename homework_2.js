//Q1 -> provide eg of array destructuring and object destructuring in js to extract product names form array of products and details from product object in online system.

let products = ["screen", "mouse", "tv", "watch"];
let [p1,p2,p3,p4] = products;

console.log(p1,p2,p3,p4);

let product = {
    name:"Asus Rog",
    category:"laptop",
    price:70000
}

let {name ,category, price} = product;

console.log(name,category,price);

//Q2 -> create class name Product with the following attributes : name,productId,price and displayDetails method. provide access code to display this details

class Product{
    name;
    productId;
    price;

    constructor(name,productId,price) {
        this.name = name;
        this.productId = productId;
        this.price = price;
    }
     
    displayDetails(){
        console.log(`Details: name:${this.name} , Id:${this.productId} , price:${this.price}`);   
    }
}

let data = new Product("Mac M4" ,101,790000);
console.log(data);

//Q3 -> Demonstrate an eg of Promise that stimulates fetching product details eg: name ,price ,availability from online store's server

function productDetails(status){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (status) {
                resolve({
                name:"MacBook",
                price:79000,
                isAvailable:true
            })
            }else{
                reject("product not available..")
            }
        },2000)
    });
}

productDetails(false)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })

// Q4 -> Demonstrate the eg of async n await to stimulate the fetching and displaying customer order history from online shoping system

function productDetails(status){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (status) {
                resolve({
                    orderId: 101,
                    customerName: "Aditya",
                    productName: "Lenovo Laptop",
                    quantity: 1,
                    totalAmount: 79000,
                    orderStatus: "Delivered",
                    orderDate: "02-07-2026"
                })
            }else{
                reject("product not available..")
            }
        },4000)
    });
}


async function orderHistory(){
    try {
        let data = await productDetails(true);
            console.log(data);
    } catch (error) {
        console.log(error);   
    }
}

orderHistory()

//Q5 -> Demonstrate an eg for default parameter n rest parameter in a function that calculates the total cost of item in a customer's shopping cart. use a default parameter for applying a discount rate and rest parameter for the list of product prices


function calculateTotal(discount = 10, ...prices){
     let total = prices.reduce((sum,price)=>{
        return sum + price;
    },0)

    let discountAmount = (total * discount) / 100;
    let finalAmount = total - discountAmount;

    return finalAmount;

}

console.log(calculateTotal(undefined,20,355,343,4000));


// Q6 -> show an eg of Excep propogation when adding an item in shoping cart , if product is outoff stock in online inventory!


function checkInventory(){
    const stock = 0;
    console.log(stock);
    
    stock = 12;
    console.log(stock);
}

function addToCart(){
    checkInventory();
}

function placeOrder(){
    try {
        addToCart();
    } catch (error) {
        console.log(error.name+" : "+error.message);
    }
}

placeOrder()

// Q6 -> Show the uses of try/catch when processing a payment during the checkout process,handling possible errors like payment failure or network issues.

function processPayment(status) {
    try {
        if (!status) {
            throw new Error("Payment Failed! Please try again.");
        }

        console.log("Payment Successful.");
    } catch (error) {
        console.log(error.name + " : " + error.message);
    }
}

processPayment(true);
processPayment(false);

// Q8 -> Show an example of a finally block that executes when updating customer profile information, regardless of whether the operation was successful or resulted in an error.

function updateProfile(status) {
    try {
        if (!status) {
            throw new Error("Profile update failed.");
        }

        console.log("Profile updated successfully.");
    } catch (error) {
        console.log(error.name + " : " + error.message);
    } finally {
        console.log("Closing database connection...");
    }
}

updateProfile(true);
updateProfile(false);

// Q9 -> Create a user-defined exception called InvalidCouponCode and demonstrate how it is used when a customer tries to apply an invalid coupon code during checkout.

class InvalidCouponCode extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidCouponCode";
    }
}

function applyCoupon(code) {
    try {
        if (code !== "SAVE20") {
            throw new InvalidCouponCode("Invalid Coupon Code.");
        }

        console.log("Coupon Applied Successfully.");
    } catch (error) {
        console.log(error.name + " : " + error.message);
    }
}

applyCoupon("SAVE20");
applyCoupon("ABC123");

// Q10 -> Show an example of throw where a function throws an exception if a product's quantity in the inventory falls below a certain threshold (e.g., less than 5 units).

function checkStock(quantity) {
    if (quantity < 5) {
        throw new Error("Stock is below the minimum threshold.");
    }

    console.log("Stock is sufficient.");
}

try {
    checkStock(10);
    checkStock(3);
} catch (error) {
    console.log(error.name + " : " + error.message);
}