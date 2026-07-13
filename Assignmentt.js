
// pdf Question

// Q1
class InvalidError extends Error{
    constructor(msg){
        super(msg)
        this.msg = "Product not available";
    }

 
  isAvailable(prodCheck){
    if(prodCheck == 0){
        try {
            throw new InvalidError("No product is Available");
        }
        catch (error) {
            console.log(error.message+" : "+error.name);
        }
    }else{
        console.log("product is available !!");
    }
}
}
const obj = new InvalidError();
obj.isAvailable(0)

// Q2

function prodInventory(){
    const items = 50;
    console.log(items);

    items = 0;
    console.log(items);
}

function prodCheck(){
    prodCheck();
}

function addProduct(){
    try {
        prodCheck();
    } catch (error) {
        console.log(error.name+":"+error.message);
    }
}

addProduct();

//Q3
class Hotel{
    hotelName;
    hotelId;
    roomPrice;

    constructor(hotelName,hotelId,roomPrice){
        this.hotelId = hotelId;
        this.hotelName = hotelName;
        this.roomPrice = roomPrice;
    }

    displayInfo(){
        console.log(`hotelName: ${this.hotelName} , hotelId: ${this.hotelId}, roomPrice: ${this.roomPrice}`);
    }
}

let h = new Hotel("Airbnb" , 1001, 5600);
console.log(h);


//Q4

//Array destructuring 
let rooms = ["Airbnb","trivago","wanderlust"];
let [r1,r2,r3] = rooms;
console.log(r1,r2,r3);

// object destructring

let roomDetails = {
    id: 1001,
    name:"Airbnb",
    price:4500
}

let {id,name,price} = roomDetails;
console.log(id,name,price);

//Q5 promises

function prodPayment(status){
    return new Promise((resolve, reject) => {
            if(status){
                resolve("Payment sucessfull!!")
            }else{
                reject("payment denied!!")
            }
    });
}

prodPayment(false)
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })

async function test(){
    try {
        let data = await prodPayment(true);
        console.log(data);
        
    } catch (error) {
        console.log(error);
    }
}

test();

// Q7
class Product{
    productName;
    productId;
    price;
    category;

    constructor(productName,
    productId,
    price,
    category){
        this.productId = productId;
        this.productName = productName;
        this.category = category;
        this.price = price;
    }

    displayInfo(){
        console.log(`Id: ${this.productId} , name: ${this.productName}, category: ${this.category} , price: ${this.price}`);
    }
}

let p = new Product("Apple",130,70000,"Mobile");
console.log(p);

//Q14

let arr = [21,33,42,1,3,4,9];

function findMax(arr){
    return Math.max(...arr)
}

console.log(findMax(arr));

//Q15

let prodObj = [{name:"apple", price:40000} , {name:"redmi", price:47000}, {name:"sony", price:60000}]

let result = prodObj.filter((res)=>{
    return res.price > 43000;
});

console.log(result);


let hoteldata = [
    {hotelName:"Airbnb" , hId:101 , revenue:75000},
    {hotelName:"trivago" , hId:102 , revenue:85000},
    {hotelName:"wanderlust" , hId:103 , revenue:75800}
]

let res = hoteldata.reduce((tot,res)=>{
    return tot+res.revenue;
},0)

console.log(res);

//Q17

let hotel = {
    name:"Airbnb",
    city: "mumbai",
    rating: 5
}

console.log(`name: ${hotel.name}, city: ${hotel.city}, rating: ${hotel.rating}`);

//Q18 

let square = (n)=>{
    return n*n;
}

console.log(square(4));

//Q19 

let multiplyBy2 = function(n){
    return n*2;
}

console.log(multiplyBy2(5));

//Q20

let arr2 = [1,2,3,4,5,6,7,8];

function filterEvenNo(arr){
    return arr.filter((n)=>{
        return n % 2 == 0;
    })
}

console.log(filterEvenNo(arr2));





