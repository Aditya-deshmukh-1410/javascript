//Q1

const person = {
    name: "aditya",
    age: 27,
    gender: "Male"
}

console.log(person.name);

//Q2

let square = (n)=>{
    return n*n;
}

console.log(square(2));

//Q3

let multiplyByTwo = function(n){
 return n*2;
}

console.log(multiplyByTwo(3));

//Q4

let  arr = [1,2,3,4,5,6,7,8];

let evenNo = arr.filter((arr)=>{
    return arr % 2 == 0;
})

console.log(evenNo);

//Q5

//Map

let arr2 = [10,20,30,40,50];

let squaree = arr2.map((arr2)=>{
    return arr2 * arr2
})

console.log(squaree);

//filter
let a1 = [1,2,3,4,5,6,7,8]
let oddNo = a1.filter((a1)=>{
    return arr2 % 2 !=0;
})

console.log(a1);

//reduce
let total = arr2.reduce((tot,sum)=>{
    return tot = tot+sum;
},0)

console.log(total);

// Q7

let employee = [
    {name:"ram",age:33,salary:3000,sale:400},
    {name:"sam",age:13,salary:3300,sale:800},
    {name:"remam",age:30,salary:3070,sale:500},
]

let result = employee.filter((emp)=>{
    return emp.salary > 3000;
});

console.log(result);

//Q8
let totalSale = employee.reduce((total,sale)=>{
    return total = total+sale.sale;
},0)

console.log(`total sale is ${totalSale}`);


//Q6

let a2 = [1,2,3,44,5,66]

function findMax(){
    return Math.max(...a2)
}

console.log(findMax());


// classwork 2

//Excep propogation

function meth(){
    const pi = 3.14;
    console.log(pi);

    pi = 22.5
    console.log(pi);
}

function meth2(){
    meth()
}

function meth3(){
    try {
        meth2()
    } catch (error) {
        console.log(error.name+":"+error.message);
    }
}


meth3();

//user defined excep

class InvalidExcep extends Error{
    constructor(msg){
        super(msg);
        this.msg = "invaild Age"
    }

}

function isValid(age){
    try {
        if(age < 20){
            throw new InvalidExcep("Age < 20");
        }
    } catch (error) {
        console.log(error.name+":"+error.message);
    }
}

isValid(18);










