//  import {useRef} from "react"
// function RefHook(){
//     const inputElement=useRef()
    
//     const btnClicked=()=>{
//         inputElement.current.style.background="Blue"
//         inputElement.current.focus()
//         inputElement.current.style.color="White"
//     }
//     return(
//         <div>
//         <input type="txt" ref={inputElement}/>
//         <button onClick={btnClicked}>Click Here</button>

//         </div>
//     )
// }
// export default RefHook

// import React ,{useRef} from "react"
// const RefHook=()=>{
//     const clickCount=useRef(0)
//     const handleClick=()=>{
//         clickCount.current+=1;
//         console.log('clicked:',clickCount.current);
//     };
//     return(<div>
//             <button onClick={handleClick}>click here</button>
//     </div>
        
//     )
// }
// export default RefHook

// how to write all the # 3 HOOKs => useState,useEffect,useRef

// import React ,{useEffect,useState,useRef} from "react"
// const RefHook=()=>{
//     const[count,setCount]=useState(0);
//     const prevCount=useRef();

//     useEffect(()=>{
//         prevCount.current=count; // update effect after render
//     },[count]);
//     return(
//         <div>
//             <p>Current:{count}</p>
//             <p>PrevCount:{prevCount.current !==undefined ? prevCount.current:'-'}</p>
//             <button onClick={()=>setCount(count+1)}>Click Here</button>
//         </div>
//     )
// }
// export default RefHook

// avoinding unnecessary Effects on first render
import React ,{useEffect,useState,useRef} from "react"
const RefHook=()=>{
    const[count,setCount]=useState(0);
    const isFirstRender=useRef(true);

    useEffect(()=>{
    if(isFirstRender.current){
        isFirstRender.current=false;
        return;
    }
    console.log('Effect ran after update,not on initaial render');
        },[count]);
    return(
      <button onClick={()=>setCount(count+1)}>Increment</button>
    )
};
export default RefHook
