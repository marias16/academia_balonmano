import { createContext, useState } from 'react'

export const CalendarioContext = createContext()

export const CalendarioProvider = ({children}) => {
    const [count, setCount] = useState(0)
    
    return (
        <CalendarioContext.Provider value={({
            count,
            setCount
        })}>
            {children}
        </CalendarioContext.Provider>
    )
}