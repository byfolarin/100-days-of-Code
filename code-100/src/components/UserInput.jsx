import { createContext, useContext, useState } from "react";

const UserContext = createContext(undefined);

import React from 'react'

export const userProvider = ({children}) =>{
    const [user] = useState({
        id: indexedDB,
        name: "John",
        email: "Johndoe@gmail.com",
        dob: "01/01/2022",
        not: "01/01/2022"
    })
    return <UserContext.Provider value={user}>     
    </UserContext.Provider>
}

export const useUser = () => useContext(UserContext)