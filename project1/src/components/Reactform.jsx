import { useState } from "react"
function ReactForms(){

    // const[fullname,setFullname]=useState("")
    // const[email,setEmail]=useState("")

    const[userData,setUserData]=useState(
        {
            fullname:"",
            email:""
        }
    )

    const handleChange=(e)=>{
        const{name,value}=e.target 
        setUserData((prevData)=>{
            return ({...prevData,[name]:value})
        })
    }
    const handlesubmit=(e)=>{
        e.preventDefault()
        console.log(userData)
        setUserData({
            fullname:"",
            email:""
        })
       
    }

    return(<div className="container">
        <form onSubmit={handlesubmit}>
            <div className="my-3">
                <input type="text" className="from-control" placeholder="FullName" onChange={handleChange} value={userData.fullname} name="fullName"/>
            </div>
            <div className="my-3">
                <input type="text" className="from-control" placeholder="Email" onChange={handleChange} value={userData.email} name="email" />
            </div>
             <div className="my-3">
                <button className="btn btn-dark">submit</button>
            </div>
        </form>

    </div>)
}

export default ReactForms