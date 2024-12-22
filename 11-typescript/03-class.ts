class Person{
    name:string;
    home:string = 'wuhan';
    static age:number = 12;
    readonly gender:string = 'male';
    sayHello(params:string) {
        console.log(params)
    }

    constructor(name:string){
        this.name = name
    }


}

console.log(Person.age)  //print static variable

const p = new Person('Ari')
p.home = 'update shenzhen'
console.log(p)  //no static variable
p.sayHello('hello method')


