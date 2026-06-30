let person  = {
    name:  "aditya",
    age: 20,
    gender: "male"
}
 
console.log(person.name);

// Q2    
let arr = [2,3,4,5];

const square = arr.map((sq)=>{
    return sq * sq
});

console.log(square);

//Q3

let arr2 = [1,2,3,4,5];

let multiplyByTwo = arr2.map(function(num){
    return num * 2;
});

console.log(multiplyByTwo);

//Q4

let student = {
    name: "ram",
    age: 20,
    grade: "A",
    introduce: function(){
        console.log("My name is Ram , I live in Mumbai");
    }
}

console.log(student.name);
student.introduce();

//Q5

let arr3 = [1,2,3,4,5];

let a = arr3.map((sq)=>{
    return sq * sq;
});

console.log(a);

let b = arr3.filter((odd)=>{
    return odd % 2 != 0;
});

console.log(b);

let c = arr.reduce((result,sum)=>{
    return result = result + sum
});

console.log(c);

// Q7 
let emp = [
    {name:"ram", age:20 , salary: 2000, sales: 100},
    {name:"sham", age:20 , salary: 2300, sales: 300},
    {name:"rema", age:20 , salary: 2050, sales: 500},
    {name:"raju", age:20 , salary: 600, sales: 10}
];

let result = emp.filter((emp)=>{
    return emp.salary > 2000;
});

console.log(result);

// Q8

let sale = emp.reduce((total,sale)=>{
    return total = total + sale.sales;
},0);

console.log(sale);




