import { createContext, useState } from 'react'

export const CalendarioContext = createContext()

export const CalendarioProvider = ({children}) => {
    const [count, setCount] = useState(0)

    //Product Detail · Open
    const [isProductOpen, setProductOpen] = useState(false)
    const openProduct = () => setProductOpen(true)
    const closeProduct = () => setProductOpen(false)

    //Product Detail · Show product

    return (
        <CalendarioContext.Provider value={({
            count,
            setCount,
            isProductOpen,
            openProduct,
            closeProduct
        })}>
            {children}
        </CalendarioContext.Provider>
    )
}