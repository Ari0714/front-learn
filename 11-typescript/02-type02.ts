//object
let a9:object
a9 = function(){}
a9 = {}

//{} 在属性名后边加上?，表示属性是可选(write)的
let b: {name: string, age?: number};
b = {name: '孙悟空', age: 18};

// [propName: string]: any 表示任意类型的属性
let a10:{name: string, [propName: string]: any}
a10 = {name:'coco',age:12,gender:'male'}

//array
let a11:string[]
let a12:number[]
let a13:Array<number>
a11 = ['1','2','3','4']
a13 = [1,2,3,4]

//tuple
let a14:[string,number]
a14 = ['123',123]

//enum
enum Gender{
    male,
    female
}
let a15:{name:string, gender:Gender}
a15 = {
    name: 'coco',
    gender:Gender.female
}