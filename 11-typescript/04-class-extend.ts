class Animal{
    name:string;
    age:number

    constructor(name:string,age:number){
        this.name = name;
        this.age = age
    }

    bark(){
        console.log('i am an Animal method')
    }
}

class Cat extends Animal{
}
class Dog extends Animal{
    bark(): void {
        console.log('i am wwwww')
    }
}

const cat = new Cat('cat123',1234)
console.log(cat)
const dog = new Dog('dog123',222334)
dog.bark()
console.log(dog)

/**
 * abstract: only used for extended(not new), can have abstract method
 */
abstract class Pet{
    name:string;
    age:number
    constructor(name:string,age:number){
        this.name = name;
        this.age = age
    }
    abstract sayHello:void

}
class parrot extends Pet{
    sayHello: void;  //must implement abstract method
}

/**
 * interface: can be implement for multiple class, only contain abstract
 */
interface aa {
    say():void
}
interface bb {
    say2():void
}
class cc implements aa,bb {
    say(): void {
        
    }
    say2(): void {
        
    }
}