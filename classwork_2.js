//Q1 -> provide an eg of array destructuring and object destructuring in js

let arr = [10,20,30,40];

let [a,b,c,d] = arr;
console.log(a,b,c,d);

//object destructure

let person = {
    name: "naman",
    age:12,
    salary: 3000
}

let {name,age,salary} = person;
console.log(name,age,salary);


//Q2 -> Create a class named Emp with following attribute name,id,salary and displayInfo method, provide access code for same.

class Emp{
    name;
    id;
    salary;

    constructor(name,id,salary){
        this.id = id;
        this.name = name;
        this.salary = salary
    }

    displayInfo(){
        console.log(`id:${this.id} ,name:${this.name} , salary:${salary}`);
    }
}

let data = new Emp("Ram" ,101,25000);

console.log(data);

// Q5 -> Show an eg of default parameter and rest parameter

function add(a,b=20){
    return a+b;
}

console.log(add(10,30));

//rest parameter
function rest(...numbers){
    return numbers
}

console.log(rest(1,2,3,4,5)); // o/p = [1, 2, 3, 4, 5]

//Q3 -> demonstrate an eg of Promises

function payment(status){
   return new Promise((resolve, reject) => {
        if (status) {
            resolve("payment Sucessfull!!")
        }else{
            reject("error occured...")
        }
    });
}

payment()
    .then((res)=>{
        console.log(res);
    })
    .catch((error)=>{
        console.log(error)
    })

// Q4 -> Demonstrate an eg of Async n await

function payment(status){
   return new Promise((resolve, reject) => {
        if (status) {
            resolve("payment Sucessfull!!")
        }else{
            reject("error occured...")
        }
    });
}

async function test(){
    try {
        let data = await payment(true);
        if(data){
            console.log(data); 
        }
    } catch (error) {
        console.log(error);
    }
}

test();


//Q7 -> show an eg of Excep propogation

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



//Q6,8,9,10 -> user defined excep + try/catch + finally + eg of throw

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

