import { createContext, useState } from "react";

export const context = createContext()

const Ctx = ({children}) => {
    const [posts, setPosts] = useState([])

    return (
        <context.Provider value={[posts, setPosts]}>
            {children}
        </context.Provider>
    )
}

export default Ctx;