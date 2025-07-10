
let myUnion:string|number|boolean="John";
myUnion=42;
myUnion=true;

let myUnionArray:(string|number|boolean)[] = ["John", 42, true];
function processUnion(value: string | number | boolean): void { 
    if (typeof value === "string") {
        console.log(`String value: ${value}`);
    } else if (typeof value === "number") {
        console.log(`Number value: ${value}`);
    } else if (typeof value === "boolean") {
        console.log(`Boolean value: ${value}`);
    }
}


function dbId(id: string | number): void {
    console.log(`Database ID: ${id}`);
}

const data:number[]=[1, 2, 3, 4, 5];
const data2:string[]=["a", "b", "c", "d"];
const data3:(string|number)[]=["a", 1, "b", 2, "c", 3];


const user:(string|number)[]=["hc",23432]
let Tuser:[string,number,boolean]

Tuser=["hc",233,false]
