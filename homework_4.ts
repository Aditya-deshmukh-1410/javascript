/* Q1 -> Define a class named Student with the following attributes
a. name , studentId , grade , address.
b. include a method displayInfo() that prints all student's details.
*/

class Student{
    name:string;
    studentId:number;
    grade: string;
    address:string;

    constructor(name:string,studentId:number,garde: string,address:string){
        this.studentId = studentId;
        this.name = name;
        this.grade = garde;
        this.address = address;
    }

    public displayInfo():void{
        console.log(`Id:${this.studentId},name: ${this.name}, grade: ${this.grade}, address: ${this.address}`);
    }

}

let s1 = new Student("naman",101,'A',"Mumbai");
console.log(s1);
s1.displayInfo();

/* 

Q2 -> Create a class school that contains
 a. static member: totalStudent to track the total number of students.
 b. non-static member: studentList to store individual student details.
 c. Methods to increment the static members and add student details to non-static list.

*/

class School{
    static totalStudent: number = 0;
    studentList:Student[] = [];

    addStudent(student : Student):void{
        this.studentList.push(student);
        School.totalStudent++;
    }

    static totalCount():number{
        return School.totalStudent
    }
}

const s2 = new Student("sham",102,"B","Pune");
const s3 = new Student("Ramu",103,"C","Banglore");

const sc = new School();
sc.addStudent(s1);
sc.addStudent(s2);
sc.addStudent(s3);

console.log(School.totalCount());
console.log(sc.studentList);

/* 
    Create a course class with a parameterized constructor that takes courseName , courseCode , and instructor as a parameter and assign them to class attributes.  
*/

class Course{
        courseName:string;
        courseCode:number;
        instructor:string;

    constructor( courseName:string,courseCode:number,instructor:string){
        this.courseName = courseName;
        this.courseCode = courseCode;
        this.instructor = instructor;
    }

    displayCourse(): void {
        console.log(
            `Course: ${this.courseName}, Code: ${this.courseCode}, Instructor: ${this.instructor}`
        );
    }   

}

let c = new Course("DSA",101,"Striver");
console.log(c);


/* 
    Q4 -> Define an Abstract class Person with abstract method getDetails() and getRole(). create two derived classes Student and Teacher that implements these methods to represent their resp details and role  .

*/

abstract class Person{

    abstract getDetails():void;
    abstract getRole():string;
}

class Students extends Person{
    name:string = "ram";
    age:number = 20;

    getDetails(): void {
        console.log(this.name,this.age);
    }
    getRole(): string {
        return "student"
    }
}

class Teacher extends Person{

    name:string = "Prof.Nilesh";
    age:number = 30;

    getDetails(): void {
        console.log(this.name,this.age);
    }
    getRole(): string {
        return "Professor"
    }
    
}

let teacher = new Teacher()
teacher.getDetails();
teacher.getRole();

let stud  = new Students();
stud.getDetails();
stud.getRole();

/*
    Q5 -> Create an interface Attendance with a method markAttendance().
          implement this interface in a student class , and define how attendance is marked for a student 
*/

interface Attendance{

    markAttendance(isPresent:true):void;

}

class Student3 implements Attendance{
    markAttendance(isPresent:true): void {
        if (isPresent) {
            console.log("Student is present");
        }else{
            console.log("student is absent");
        }
    }
}

let s = new Student3();
s.markAttendance(true);

/*
    Q6 -> Create a generic function " getStudentInfo<T>(info:T):T " that returns any type of student information such as name, Id, grade.
*/

// for function

function getStudentInfo<T>(info:T):T{
    return info;
}

console.log(getStudentInfo<number>(10));
console.log(getStudentInfo<string>("ram"));
console.log("isStudent: "+getStudentInfo<boolean>(true));

// for class and interface

interface StudentDetails<D>{
    details:D;
}


class Emp<T,K,D> implements StudentDetails<D>{
    id:T;
    name:K;
    details: D;
    
    constructor(id:T, name:K, details:D) {
        this.id = id;
        this.name = name;
        this.details = details;
    }
    
}

let e = new Emp(101,"ram","I live in India");
console.log(e);

/*
    Q7 -> Define abstract class Institute with an abstract method getInstituteType() . create a class School implementing the interface Management with methods like addStudent() , removeStudent().
    Combine this in a real-time.
*/

abstract class Institute{
    abstract getInstituteType():void;
}

interface Management{
    addStudent(name:string):void;
    removeStudent(name:string):void;
}

class School1 extends Institute implements Management{

    studentList:string[] = [];

    getInstituteType(): void {
        console.log("Institute Type: Engineering");
    }
    addStudent(name:string): void {
        this.studentList.push(name);
        console.log(`${name} is added `);
    }

    removeStudent(name:string): void {
        const index = this.studentList.indexOf(name);

        if (index !== -1) {
            this.studentList.splice(index, 1);
            console.log(`${name} removed successfully.`);
        } else {
            console.log("Student not found.");
        }
    }

    displayStudents(): void {
        console.log(this.studentList);
    }   
}

let school = new School1();
school.getInstituteType();

school.addStudent("naman");
school.addStudent("ram");
school.addStudent("rema");


school.displayStudents();

school.removeStudent("rema");
school.displayStudents();









