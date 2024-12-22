const aa: String = '223';
console.log(aa)

/**
 * difine type
 */
let a: String;
a = '123'
// a = 123

/**
 * difine method
 */
function sum(a: number, b: number): Number {
    return a + b;
}
console.log(sum(1, 2))

/**
 * type
 */
//1.word meaning
let a1: 10;
a1 = 10;
// a1 = 101;  //err

let a2: 'male' | 'female'
a2 = 'male'
// a2 = 'female2' //err

let a3: boolean | string
a3 = true
a3 = '12'

//2.any: equal no type
let a4: any
a4 = 12
a4 = '131'
//3.unknown: any`s safety type; unknown类型的变量，不能直接赋值给其他变量
let a5: unknown
a5 = 12
a5 = '131'

//type assert: 类型断言，可以用来告诉解析器变量的实际类型
let e: unknown;
e = 'hello'
let a6: string
a6 = e as string;
a6 = <string>e;

//void(就表示没有返回值的函数) & nerver(表示永远不会返回结果)
function a7(): void {
    console.log('voild func')
}
function a8(): never {
    throw new Error('报错了！');
}