/**
 * pack: 1.private element, 2.provide get/set
 */
class Bbb{
    private name:string;
    private age:number

    constructor(name:string,age:number){
        this.name = name;
        this.age = age
    }

    setName(name:string){
        this.name = name
    }
    setAge(age:number){
        this.age = age
    }
    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }

    bark(){
        console.log('i am an Animal method')
    }
}

const bbb = new Bbb('cat123',1234)
bbb.setName('bbb123')
console.log(bbb.getName())