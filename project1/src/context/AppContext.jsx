import { createContext } from "react"

export const Appcontext=createContext()

const ContextProvide = (props) => {
    const mobile="+1234567890"
    const fullname="admin"
  return (
    <AppContext.Provider value={mobile}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppContext