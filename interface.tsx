interface User{
    readonly id:number //we can't edit
    email:string,
    password:number,
    startTrail():string
    getCoupan?:string //if write like this is optional
}

const shiva:User={
    id:234234,
    email:"shicskdnsdjk",
    password:234234234,
    startTrail:()=>{
        return "numbere"
    }
}

interface Admin extends User{
    role:string
}
