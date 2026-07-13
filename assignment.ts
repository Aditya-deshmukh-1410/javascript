//Q8

class Products{
    constructor(
        public name:String,
        public id:number,
        public price:number
    ){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    
}

class Storee{
    static totalProducts:number = 0;
    productList:Products[] = [];

    public addProduct(product: Products):void{
        this.productList.push(product);
        Storee.totalProducts++;
    }

    static prodCount():number{
        return Storee.totalProducts;
    }
}

const p1 = new Products("milk",101,45);
const p2 = new Products("sugar",102,450);
let p3 = new Products("coffee",103,40);

const store = new Storee();
store.addProduct(p1);
store.addProduct(p2);
store.addProduct(p3);

console.log(Storee.totalProducts);


// Q9 

class Room{
    constructor(
        public roomType:String,
        public roomNo:Number,
        public tariff:Number
    ){
        this.roomNo = roomNo;
        this.roomType = roomType;
        this.tariff = tariff
    }

    displayInfo():void{
        console.log(`RoomNo: ${this.roomNo} , RoomType: ${this.roomType} , Tarif: ${this.tariff}`);
    }
}

let room = new Room("Air condition", 1001,20);
console.log(room);


//Q10
abstract class Persons{

    abstract getDetails():void;
    abstract getRole():String;

}


class Customer extends Persons{

    custName:String = "Ram";
    custAge:number = 30;

    getDetails(): void {
        console.log(`Customer Name: ${this.custName} , Age: ${this.custAge}`);

    }
    getRole(): String {
        return "Customer";
    }
}

class HotelStaff extends Persons{

    staffName:String = "naman";
    staffAge:number = 28;

    getDetails(): void {
        console.log(`staffName : ${this.staffName} , staffAge: ${this.staffAge}`);
        
    }
    getRole(): String {
        return "Hotel Staff"
    }
}

let hotelstaff = new HotelStaff();
hotelstaff.getDetails();
hotelstaff.getRole;

let customer = new Customer();
customer.getDetails();
customer.getRole();

//Q11

interface Booking{
    markBooking(isBooked: boolean):void;
}

class Ticket implements Booking{

    markBooking(isBooked: boolean): void {
        if(isBooked){
            console.log("ticket is booked sucessfully!!");
        }else{
            console.log("booking failed!!");
        }
    }
    
}

let ticket = new Ticket();
ticket.markBooking(false);

//Q12
function getProductInfo<T>(info:T):T{
    return info;
}

console.log(getProductInfo<String>("Lenovo"));
console.log(getProductInfo<number>(80000));

//Q13

abstract class Hospitalility{
    abstract getBusinessType():String;
}

interface Hotels{
    addroom(name:string):void;
    removeRoom(name:string):void;
}

class Business extends Hospitalility implements Hotels{

    hotelList:string[] = [];

    getBusinessType(): String {
        return "Pharma type"
    }
    
    addroom(name: string): void {
        this.hotelList.push(name);
        console.log(`${name} is added`);
    }

    removeRoom(name: string): void {
        const data = this.hotelList.indexOf(name);

        if(data !== -1){
            this.hotelList.splice(data,1);
            console.log(`${name} is removed sucessfully!!`);
        }else{
            console.log("hotel not found!!");
        }
    }

    displayRoom():void{
        console.log(this.hotelList);    
    }
}

let business = new Business()
business.addroom("airbnb");
business.addroom("trivago");
business.addroom("TryVenture");

business.displayRoom();

business.getBusinessType();

business.removeRoom("airbnb");
business.displayRoom();

