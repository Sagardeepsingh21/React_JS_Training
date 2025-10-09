import { useState } from 'react'


function MemoHook () {
const [number,setnumber]=useState(0)
const[counter,setcounter]=useState(0)
function cubeNum(num){
    console.log('calculation Done!')
    return Math.pow(num,3)
}
const result=cubeNum(number)
  return (
    <div>
        <input type="number" value={number} onChange={(e)=>{setnumber(e.target.value) }}/>
        <h1>cube of number:{result}</h1>
        <button onClick={()=>setcounter(counter+1)}>Counter++</button>
        <h1>Counter:{counter}</h1>
    </div>
  )
}

export default MemoHook