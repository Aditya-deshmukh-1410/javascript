//Q1

let student  = {
    name: "ram",
    grade: "A",
    subject: "Maths"
};   

console.log(student.grade); 
 
  
//q2

const arr = [40,50,80];

let calGrade =  arr.map((score)=>{
    if (score > 70) {
        return "A"
    } else if(score >= 40){
        return "B"
    }else {
        return "C"
    }
});

console.log(calGrade);


//Q3

let arr1 = [1,2,3,4,5]; 

let increaseMarks = arr1.map(function(arr1){
    return arr1 + 10;
});

console.log(increaseMarks);
console.log(...increaseMarks);

// Q4

let Student = {
    name: "Ram",
    age: 20,
    grade: "A",
    introduce: function(){
        console.log("Myself Ram Kumar");
    }
};

console.log(Student.name);
console.log(Student.grade);
Student.introduce();




// Q5
let data = [40,50,60,70,80,90];

let a = data.map((grade)=>{
    if (grade > 60) {
        return "Grade A";
    } else if(grade >= 50){
        return "Grade B"
    }else {
        return "Grade C"
    }
});
console.log(a);


let b = data.filter((count)=>{
     return count > 60
});

console.log(b);

const calTotal = data.reduce((total,data)=>{
    return total = total+ data;
});
console.log(calTotal);


// Q6

let arr2 = [30,35,66,49]

 function findTopper(){
    return Math.max(...arr2);
}

console.log(findTopper());



// Q7

let studentData = [
    {name: "Ram", age : 20, marks: 82},
    {name: "Sham", age : 21, marks: 87},
    {name: "Rema", age : 20, marks: 68},
    {name: "Rahul", age : 21, marks: 32},
    {name: "Raju", age : 20, marks: 79}
]

let marks = studentData.filter((stud)=>{
    return stud.marks > 80;
});

console.log(marks);


// Q8
let totalMarks = studentData.reduce((total,stud)=>{
    return total = total + stud.marks;
},0); // Because your array contains objects, not numbers that's why 0 is initailized.
// Object arrays → you must give initial value (0).
console.log(totalMarks);




