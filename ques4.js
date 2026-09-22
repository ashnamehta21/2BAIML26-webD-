class Product{
    constructor(productId, productName, price){
        this.productId = productId;
        this.productName = productName;
        this.price = price;

    }
    getDiscountedPrice(discount){
        return this.price-(this.price*discount/100);
    }
    display(){
        console.log("Product ID: "+ this.productId);
        console.log("Product Name: "+ this.productName);
        console.log("Price: "+ this.price);
    }
    static compareProducts(p1, p2){
        if(p1.price>p2.price){
            console.log(p1.productName+ "has higher price");
        }
         else if(p2.price>p1.price){
            console.log(p2.productName+ "has higher price");
         }
         else{
            console.log("Both products has the same price");
         }
    }
}
class Electronics extends Product{
     constructor(productId, productName, price, warranty){
     super(productId, productName, price);
     this.warranty = warranty;
     }
     display(){
        super.display();
        console.log("Warranty: "+ this.warranty+ "years");
     }
}
let p1 = new Product(101, "laptop", 700000);
let p2 = new Product(102, "Mobile", 55000);
p1.display();
console.log("Discounted price: "+ p1.getDiscountedPrice(10));
Product.compareProducts(p1,p2);
let e1= new Electronics ( 103, "Smart Tv", 50000, 2);
console.log ("\nElectronics Product-");
e1.display();