//Q1 -> Create object called student with properties name , grade and subject. Access and log the name property to console.

let student  = {
    name: "ram",
    grade: "A",
    subject: "Maths"
};

console.log(student.name);
 

//q2 -> Create an arrow function named calculateGrade that takes a score as parameter and returns the grade (eg: A,B,C).

let calGrade = (score)=>{
    if (score > 70) {
        return "A"
    } else if(score >= 40){
        return "B"
    }else{
        return "C"
    }
}
console.log(calGrade(80));


//Q3-> implement an anonymous function assigned to the variable increaseMarks that takes an array of marks as a parameter and increases each marks by 10.

let increaseMarks = function(marks){
    return marks.map((m)=>{
        return m = m + 10
    })
}

let marks = [1,2,3,4,5]; 
console.log(increaseMarks(marks));


// Q4 -> Write a named function filterPassedStudents that takes an array of student marks and returns a new array containing students who passed.

function filterPassedStudents(studMarks){
    return studMarks.filter((m)=>{
        return m >= 50;
    });
}

let studMarks = [40,50,60,70];
console.log(filterPassedStudents(studMarks));


// Q5 -> Demonstrate an array Methods(map,filter, reduce) 

    // 1)Map -> To convert marks to grade

let data = [40,50,60,70,80,95,99];

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

    // 2)filter -> to extract student who scored above 75
let b = data.filter((count)=>{
     return count > 75;
});

console.log(b);

    //3)reduce -> to calculate total marks of all student

const calTotal = data.reduce((total,data)=>{
    return total = total+ data;
},0);

console.log(calTotal);


// Q6 -> Create a funtion findTopper that accepts an array of student marks and returns the highest marks.

let arr2 = [30,35,66,49]

 function findTopper(arr){
    return Math.max(...arr);
}

console.log(findTopper(arr2));


// Q7 -> Write function to filter students with marks greater than 80 from array of student objects

let studentData = [
    {name: "Ram", age : 20, marks: 82},
    {name: "Sham", age : 21, marks: 87},
    {name: "Rema", age : 20, marks: 68},
    {name: "Rahul", age : 21, marks: 32},
    {name: "Raju", age : 20, marks: 79}
]

let marks2 = studentData.filter((stud)=>{
    return stud.marks > 80;
});

console.log(marks2);


// Q8 -> find total marks scored by all student in class
let totalMarks = studentData.reduce((total,stud)=>{
    return total = total + stud.marks;
},0);

console.log(totalMarks);




