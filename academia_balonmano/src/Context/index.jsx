import { createContext, useState } from 'react'

export const CalendarioContext = createContext()

export const CalendarioProvider = ({children}) => {
    // Calendar · Count
    const [count, setCount] = useState(0)

    //Product Detail · Open
    const [isProductOpen, setProductOpen] = useState(false)
    const openProduct = () => setProductOpen(true)
    const closeProduct = () => setProductOpen(false)

    //Product Detail · Show product
    const [productToShow, setProductToShow] = useState({})

    return (
        <CalendarioContext.Provider value={({
            count,
            setCount,
            isProductOpen,
            openProduct,
            closeProduct,
            productToShow,
            setProductToShow
        })}>
            {children}
        </CalendarioContext.Provider>
    )
}