//Q1-> Create object called person with properties name , age and gender. Access and log the name property to console.

const person = {
    name: "aditya",
    age: 27,
    gender: "Male",
    introduce: function(){
        console.log(`My name is ${this.name}, I live in Mumbai`);
    }
}

console.log(person.name);
person.introduce();

//Q2 -> Create an arrow function named square that taked a number as parameter and returns the square of that number.

let square = (n)=>{
    return n*n;
}

console.log(square(2));

//Q3 -> implement an anonymous function assigned to the variable multiplyByTwo that takes number as a parameter and multiplies each element by 2.

let multiplyByTwo = function(n){
    return n*2;
}

console.log(multiplyByTwo(3));

//Q4 -> Write a named function filterEvenNumbers that takes an array of numbers as a parameter and returns a new containing only even number


function filterEvenNumbers(arr){
    return arr.filter((arr)=>{
        return arr % 2 == 0;
    })
}
let  arr = [1,2,3,4,5,6,7,8];
console.log(filterEvenNumbers(arr));

//Q5 -> Demonstrate an array Methods(map,filter, reduce) 


// 1)Map -> To square the each number!

let arr2 = [10,20,30,40,50];

let squaree = arr2.map((arr2)=>{
    return arr2 * arr2
})

console.log(squaree);

// 2)filter -> to extract odd number
let a1 = [1,2,3,4,5,6,7,8]

let oddNo = a1.filter((a)=>{
    return a % 2 !=0;
})

console.log(oddNo);

// 3)reduce -> to calculate sum of all elements
let total = arr2.reduce((tot,sum)=>{
    return tot = tot+sum;
},0)

console.log(total);

//Q6 -> Create a funtion findMax that accepts an array of numbers and returns the largest number in array

let a2 = [1,2,3,44,5,66]

function findMax(a2){
    return Math.max(...a2)
}

console.log(findMax(a2));

// Q7 -> Write function to filter employees earning more then certain amt from array of objects 

let employee = [
    {name:"ram",age:33,salary:3000,sale:400},
    {name:"sam",age:13,salary:3300,sale:800},
    {name:"remam",age:30,salary:3070,sale:500},
]

let result = employee.filter((emp)=>{
    return emp.salary > 3000;
});

console.log(result);



//Q8 -> Write a program to find total sales from array of objects in e-commerce system
let sales = [
    {name:"keyboard",price:3000,sale:400},
    {name:"mouse",price:3300,sale:800},
    {name:"laptop",price:3070,sale:500},
]

let totalSale = sales.reduce((total,sale)=>{
    return total = total + sale.sale;
},0)

console.log(`total sale is ${totalSale}`);