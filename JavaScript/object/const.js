//using constructor

class Person{

    constructor(age,name){
        this.age=age;
        this.name=name;

        //initializing instance variable
    }
    printPerson(){
        console.log(this.age,this.name);
    }
}

var obj=new Person(25,"ram");
obj.printPerson();