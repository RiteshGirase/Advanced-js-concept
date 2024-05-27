// spread operator concept------------------------------------------------------

function sum(a,b,c){
    return a+b+c
}

let arr=[1,4,7];
console.log(sum(...arr))

// IIFE concept--------------------------------------------------------

async function hii(){
    return new Promise((resolve, reject)=>{
    let b= Math.random()
    if(b<0.5){
        reject("sorry program cannot run")
    }

    else{
    
        setTimeout(()=>{
            resolve(45)
        }, 3000)
    }
})
}




async function main(){

let a= await hii()
console.log(a);

}
main()


// destructing concept--------------------------------------------------------

let [a, b, ...rest]=[1,2,3,4,5,6,7,8]
console.log(a, b, rest);

// let see in object the destructing concept-----------------------------------

let obj = {
    nam : "Ritesh",
    name1 : "Jaanu",
    c :3
}

let {nam, name1} = obj
console.log(nam, name1);

// hoisting concept------------------------------------------------------------------

let u = 6;

function main(){
    let u = 5; 
    console.log(u);
    // var u = 7;
}

console.log(u);
main()
