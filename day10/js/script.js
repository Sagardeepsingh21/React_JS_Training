// function yo(...call){
//     console.log(call)
// }
// yo(10,20,50,80,45)

// function lv(a,b,...call){
//     console.log(call)
//     console.log(a)
//     console.log(b)
// }
// lv(110,30,40,20,45)

// // spread operator (...)is used to unpack an array or object 

// var num=[12,34,56,89]
// console.log[(num,55,60)]
// console.log([...num,81,92])

// const person={
//     firstname:"Rohan",
//     lastname:"kesar",
//     email:'yashraj@gmail.com',
//     maobile:1234567890
// }

// console.log(`firstname:${person.firstname}`)
// console.log(`lastname:${person.lastname}`)
// console.log(`email:${person.email}`)
// console.log(`mobile no:${person.mobile}`)

// const person1={
//     firstname:"rohan",
//     lastname:"kumar",
//     email:"yashraj23@gmail.com",
//     mobile:1234567890
// }
// const{firstname,lastname,email,mobile}=person1

// console.log(`firstname:${firstname}`)
// console.log(`lastname:${lastname}`)
// console.log(`email:${email}`)
// console.log(`mobile no:${mobile}`)

var passwrod1=document.getElementById("key")
var value=document.getElementById("new")
function show()
{
    if(password1 =="password"){
        password1.type="text"
        show.textcontent="hide"
        
    }
    else{
        password1.type="password"
        show.textcontent="hide"
    }
}