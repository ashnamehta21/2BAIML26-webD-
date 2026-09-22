class Student 
{
    static count =0;
    constructor (name, Roll, marks)
    {
        this.name= name
        this.marks= marks
        this.Roll= Roll;

        Student.count++;
    }
    display () {
        console.log (this.name)
        console.log (this.Roll)
        console.log (this.marks)
        if (this.marks >= 35)
        {
            console.log ("pass")
        }
        else {
            console.log("Fail");
    }
}
}
 let s1= new Student (101, "Ashna",78);
 let s2= new Student (102, "Mehta",80);
 let s3= new Student (103, "Akshat",90);
 s1.display();
 s2.display();
 s3.display();
 console.log (Student.count);
