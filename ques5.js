class Vehicle{
    constructor(vehicleNo, driverName, distance){
        this.vehicleNo = vehicleNo;
        this.driverName = driverName;
        this.distance = distance;
    }
    calculateFare(){
        console.log("Base fare logic not defined for generic vehicle.");
        return 0;
    }
    displayFare(){
        console.log("Vehicle No  : " + this.vehicleNo);
        console.log("Driver Name : " + this.driverName);
        console.log("Distance    : " + this.distance + " km");
        console.log("Fare        : Rs. " + this.calculateFare());
    }
    static showPlatform(){
        console.log("Booking Platform: " + Vehicle.platformName);
    }
}
class Car extends Vehicle{
    constructor(vehicleNo, driverName, distance){
        super(vehicleNo, driverName, distance);
    }
    calculateFare(){
        return this.distance * 15;
    }
}
class Bike extends Vehicle{
    constructor(vehicleNo, driverName, distance){
        super(vehicleNo, driverName, distance);
    }
    calculateFare(){
        return this.distance * 8;
    }
}
Vehicle.showPlatform();
const car1 = new Car("UP14AB1234", "Rahul Sharma", 12);
const car2 = new Car("UP14CD5678", "Aman Verma", 25);
const bike1 = new Bike("UP14EF9012", "Priya Singh", 8);
const bike2 = new Bike("UP14GH3456", "Rohit Kumar", 18);
console.log("Car Bookings");
car1.displayFare();
car2.displayFare();
console.log("Bike Bookings");
bike1.displayFare();
bike2.displayFare();