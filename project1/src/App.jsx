// import food1 from'./assets/food1.jpg'
// import food4 from'./assets/food4.jpg'
// import food5 from'./assets/food5.jpg'
// import food6 from'./assets/food6.jpg'
// import AdminPanel from './components/AdminPanel'
// import LoginForm from './components/LoginForm'
// import Person from './components/Person'
// import User from './components/User'
// import Product from './components/Product'

// function App()

// {
//   // const foodlist=[
//   //   {id:1,food:"Pizza",price:149,image:food1},
//   //   {id:2,food:"pasta",price:30,image:food4},
//   //   {id:3,food:"Maggie",price:40,image:food5},
//   //   {id:4,food:"burger",price:70,image:food6},
//   //   {id:5,food:"Cake",price:90,image:food4}
//   // ]
//   // console.log(foodlist)
//   // const fullname="admin"
//   const isLogin=false
//   // var content=""
//   // if(isLogin){
//   //   content=<AdminPanel/>
//   // }
//   // else{
//   //   content=<LoginForm/>
//   // }
//   const userData={
//     firstName:"simmi",
//     lastName:"kumar",
//     email:'simmi@123gmail.com'
//   }
//   const product=[
//     { id: "1",item: "pizza",item_unit: 2,item_price: 10},
//     { id: "2",item: "burger",item_unit: 3,item_price: 5},
//     { id: "3",item: "pasta",item_unit: 1,item_price: 8}
//   ]

//   let total=0
//   product.forEach(p=>{
//     total+=p.item_unit*p.item_price
//   })

//   let final_total=total-total*0.1


//   return(
//     <div>
//       {
//         isLogin && <AdminPanel/>
//       }
//       {/* <Person firstName={firstName} lastName={lastName} email={email}/> */}
//       <Person userData={userData}/>
//       {/* {isLogin?<AdminPanel/>:<LoginForm/>} */}
//     {/* <h1 class="display-1">Display1</h1>
//     <h1 class="display-2">Display2</h1>
//     <h1 class="display-3">Display3</h1>
//     <h1 class="display-4">Display4</h1>
//     <h1 class="display-5">Display5</h1>
//     <h1 class="display-6">Display6</h1>
    

//     <table class="table table-striped table-hover">
//       <thead>
//         <tr class="table-primary">
//           <th>Food</th>
//           <th>Price</th>
//           <th>Image</th>
//         </tr>
//       </thead>
    
//     <tbody>
//       {
        
//         foodlist.map((fooditem)=>{
//           return(
//             <tr key={fooditem.id}>
//               <td class="table-success">{fooditem.food}</td>
//               <td class="table-success">{fooditem.price}</td>
//               <td class="table-success"><img src={fooditem.image}alt=""/></td>
//             </tr> 
//           )
//         })
//       }
//       {
//         foodlist.filter(item=>item.price<150)
//         .map(fooditem=>{
//           return(
//             <tr key={fooditem.id}>
//               <td class="table-success">{fooditem.food}</td>
//               <td class="table-success">{fooditem.price}</td>
//                <td class="table-success"><img src={fooditem.image}alt=""/></td>
//             </tr> 
//           )
//         })
//       }
//     </tbody>
//     </table> */}
//     {/* <div className='container'><p>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, voluptas cum facere ut amet, labore animi exercitationem vitae nostrum, ratione illo nemo rem quisquam. Animi illo odio perferendis numquam voluptatem?
//       </p></div>
//       <div className='conatiner=fluid'>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo rem amet impedit, perspiciatis ducimus molestias dolorum enim magnam quis, earum, minima veniam nam aliquam eaque nobis ab laudantium! Quibusdam!

//       </div> */}
//       {/* <div className='container'>
//         <div className='row'>
//           <div className='col-lg-2'>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas laboriosam aliquam sint ratione, commodi doloremque odit quod rerum, quo, veritatis ipsam dolorum esse repudiandae quas odio minus recusandae dolorem tenetur!
//           </div>
//           <div className='col-lg-4'>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas laboriosam aliquam sint ratione, commodi doloremque odit quod rerum, quo, veritatis ipsam dolorum esse repudiandae quas odio minus recusandae dolorem tenetur!
//           </div>
//           <div className='col-lg-4'>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas laboriosam aliquam sint ratione, commodi doloremque odit quod rerum, quo, veritatis ipsam dolorum esse repudiandae quas odio minus recusandae dolorem tenetur!
//           </div>
//           <div className='col-lg-2'>
//             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas laboriosam aliquam sint ratione, commodi doloremque odit quod rerum, quo, veritatis ipsam dolorum esse repudiandae quas odio minus recusandae dolorem tenetur!
//           </div>
//         </div>
//       </div> */}
      
//        </div>

    
//   )
// }
// export default App

// date-29-09-2025

// import User from "./components/User"
// function App(){
//   return(
//     <div>
//       <User/>
//     </div>
//   )
// }
// export default App

// import ReactForms from "./components/reactform"

// function App(){
//   return(
//     <div>
//       <ReactForms/>
//     </div>
//   )
// }
// export default App

// import FetchApi from "./components/fetchApi"


// function App(){
//   return(
//     <div>
//       <FetchApi/>
//     </div>
//   )
// }
// export default App
// import React from "react"
// import Task from "./components/Task"
// function App(){
//   return(
//     <div>
// <Task/>

//     </div>
//   )
// }
// export default App
// import React from 'react'
// import RefHook from "./components/RefHook"

// const App= () => {
//   return (
//     <div><RefHook/></div>
//   )
// }

// export default App
import React from 'react'
import MemoHook from './components/MemoHook'

const App = () => {
  return (
    <div>
      <MemoHook/>
    </div>
  )
}

export default App