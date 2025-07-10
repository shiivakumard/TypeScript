let user:string= "John Doe";
let age:number=78;
let isAdmin:boolean=true;
let habites:string[]=["Reading","Swimming","Coding"];
let mydata:number[]=[1,2,3,4,5];
let mydata2:Array<number>=[1,2,3,4,5];
let mydata3:Array<string>=["a","b","c","d"];
let mydata4:Array<boolean>=[true,false,true];
let mydata5:Array<any>=[1,"a",true];
let mydata6:Array<unknown>=[1,"a",true];

let mydata7:Array<string|number|boolean>=[1,"a",true];
let mydata8:Array<{name:string,age:number|any}>=[{name:"John",age:30},{name:"Jane",age:20},{name:"doe",age:25}];
let mydata9:Array<{name:string,age:number|any}>=
[{name:"John",age:30},{name:"Jane",age:20},{name:"doe",age:25}];

///number
let userId:number=987657890;


///boolean
let isActive:boolean=true;

//any
// any is a not a type, when we use any type, we are telling typescript to not check the type of the variable
// it can be anything, it can be a string, number, boolean, object, array, etc.
let userData={name:"John",age:30,isAdmin:true};

function addTwo(a:number,b:number){
    return a+b;


}
console.log(addTwo(2,3)); //5
function getUppercase(str:string){
    return str.toUpperCase()
}
console.log(getUppercase("hello")); //HELLO


function signup(name:string,age:number,isAdmin:boolean){
    return `Name: ${name}, Age: ${age}, isAdmin: ${isAdmin}`;
}
console.log(signup("John",30,true)); //Name: John, Age: 30, isAdmin: true

let login=(name:string,age:number,isAdmin:boolean=false)=>{
    return `Name: ${name}, Age: ${age}, isAdmin: ${isAdmin}`;
}
console.log(login("John",30)); //Name: John, Age: 30, isAdmin: false 

function getValue(myvalue:string|number|boolean){
    if(typeof myvalue==="string"){
        return myvalue.toUpperCase();
    }else if(typeof myvalue==="number"){
        return myvalue+10;
    }else if(typeof myvalue==="boolean"){
        return !myvalue;
    }
}

console.log(getValue("hello")); //HELLO
console.log(getValue(10)); //20
console.log(getValue(true)); //false


mydata.map((item):number=>{
    return item*2;
})

function consoleError(message:string):void {
    // This function does not return anything, it just logs an error message
    throw new Error(message);
}

function handleerror(error:string):never {
    // This function will never return, it will throw an error
    throw new Error(error);
}

function infiniteLoop():never {
    // This function will never return, it will run indefinitely
    while(true){
        console.log("This is an infinite loop");
    }
}
