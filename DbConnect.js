const mysql2 = require('mysql2');

//creating connection
const db = mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"YOUR_DB_PASS",
    database:"DB_NAME"
})

function connectDB(){
    db.connect((err)=>{
        if (err) {
            console.log(err);
        } else {
            console.log("connected to db....");
        }
    })
}

connectDB();


// insert data
function insertEmp(name,salary){
    const user = {name,salary};

    db.query("insert into emp set ? ",user,(err)=>{
        if (err) {
            console.log(err);
        } else {
            console.log("data inserted sucessfully!");
        }
    })
}

insertEmp("ram",23000);
insertEmp("sham",40000);


// update data
function updateEmp(id,name){
    // const data = {id,name};
    const sql = "update emp set name=? where id=?";
    db.query(sql,[name,id],(err)=>{

        if (err) {
            console.log(err);
        } else {
            console.log("updated sucessfully....");
        }
    })
}

updateEmp(1,"naman");


// delete data
function deleteEmp(id){
    const sql = "delete from  emp where id = ?";
    db.query(sql,[id],(err)=>{

        if (err) {
            console.log(err);
        } else {
            console.log("data deleted sucessfully!!");
        }
    })
}

deleteEmp(1);

// show data
function displayEmp(){
     db.query("select * from emp",(err,res)=>{
        if (err) {
            console.log(err);
        } else {
            console.log(res);
        }
    })
}

displayEmp();

