import { useEffect } from "react"
import { useState } from "react"

function FetchApi() {

    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`count:${count}`)
    },[])
    const handlesubmit = () => {
        setCount(count + 1)
    }
    return (

        <div>
            <h1>Hello </h1>
            <button onClick={handlesubmit}>click heere</button>
        </div>

    )
}
export default FetchApi