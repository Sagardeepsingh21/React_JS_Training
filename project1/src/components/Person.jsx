function Person({userData}){
    const {firstName,lastName,email}=userData
    return(
        <div>
            <h1>Person details</h1>
            {/* <p>Fisrt Name:{userData.firstName}</p>
            <p>last Name:{userData.lastName}</p>
            <p>email:{userData.email}</p> */}
            {
                <p>FirstName:{firstName}</p>
                
            }
        </div>
    )
}
export default Person