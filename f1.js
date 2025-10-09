

// console.log("hi")
// console.log("hi")
// function step1(){
//     console.log("step 1: Starting")
// }
// function step2(){
//     console.log("step 2: Running")
// }
// function step3(){
//     console.log("step 3: Ending")
// }

// step1();
// step2();
// step3();
// function lognTask(){
//     for(var i=1;i<1e5;i++){
//         console.log(i);
//     }
//     console.log("log end")
// }

// console.log("start")
// //lognTask()
// console.log("end")

// function simmi(fullname){
//     console.log(`welcome:${fullname}`)
// }
// function sagar(callback){
//     var fullname="admin"
//     callback(fullname)
// }
// function sagar(function(fullname)
    
//     callback(fullname))


// sagar(simmi)

// function sayhi(){
//     console.log("hi after 5 seconds")
// }
// setTimeout(sayhi,5000)


// promise 

const myPromise= new Promise((resolve,reject)=>{
    let success=true;

    if(success){
        resolve("operation is successful")
    }else{
        reject("someting went wrong")
    }
});

myPromise.then(result=>{
    console.log("Success:",result)
})
.catch(error=>{
    console.log("Error : ",error)
})

function asyncTask(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("5 second passed");
        },5000);
    });
}
asyncTask().then(
    message=>{
        console.log(message)
    }
)

// chaining promises
const loginUser=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("User logged in");
        resolve()
    },1000)
    }
)

const getUserdata=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("User logged in");
        resolve()
    },2000)
    }
)

const showDataboard=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("User logged in");
        resolve()
    },5000)
    }
)

loginUser.then(getUserdata).then(showDataboard)

// Async and await
// Async makes a function return a promise
// await pauses the execution inside the an async function untill the Promise is reolved or rejected.

async function greet(){
    return "Hello!";
}
const result=await greet()
console.log(result)

// https://fakestoreapi.com/
// https://jsonplaceholder.typicode.com/
fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())            
            .then(json=>console.log(json));

async function fetchData(){
    try{
        const response=await fetch('https://fakestoreapi.com/products/1');
        const data=await response.json();
        console.log(data);
    }catch(error){
        console.eroor("fetch failed",error);
    }
}
fetchData();
// the useeffect hook alloe=ws you to performs side effects in componenets
// fetching data from fetch api
// directly updating the dom
// timers

/* 
syntax
useEffect(()=>{
// side effect logic here
    }
return(()=>{

    }
{Dependencies}*/


