// class Parent{
//     phone(){
//         console.log("i am inside Parent");
//     }
// }

// class Child extends Parent{

// }

// var obj=new Child();
// obj.phone();


class Parent{
    m1(){
        console.log("I am inside Parent");
    }
}

class subChild extends Parent{
    m2(){
        console.log("i am inside subchild");
    }
}

class child extends subChild{
    m3(){
        console.log("i am inside Child ");
    }
    
}
console.log("parent");
var obj=new Parent()
obj.m1();

console.log('\nsub Child');
var obj1=new subChild();
obj1.m1(); //subchild can access parent methods
obj1.m2();

console.log("\nChild");
var obj2=new child();
obj2.m1();
obj2.m2();
obj2.m3();