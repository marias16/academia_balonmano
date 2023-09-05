import { createContext, useState } from 'react'

export const CalendarioContext = createContext()

export const CalendarioProvider = ({children}) => {
    

    //Product Detail · Open
    const [isProductOpen, setProductOpen] = useState(false)
    const openProduct = () => setProductOpen(true)
    const closeProduct = () => setProductOpen(false)

    //Product Detail · Show product
    const [productToShow, setProductToShow] = useState({})

    //Calendar
    const [count, setCount] = useState(0)
    const [calendarList, setCalendarList] = useState([])

    //Calendar · Side-menu
    const [isCalendarSideOpen, setCalendarSideOpen] = useState(false)
    const openCalendarSide = () => setCalendarSideOpen(true)
    const closeCalendarSide = () => setCalendarSideOpen(false)


    return (
        <CalendarioContext.Provider value={({
            count,
            setCount,
            isProductOpen,
            openProduct,
            closeProduct,
            productToShow,
            setProductToShow,
            calendarList,
            setCalendarList,
            isCalendarSideOpen,
            setCalendarSideOpen,
            openCalendarSide,
            closeCalendarSide
        })}>
            {children}
        </CalendarioContext.Provider>
    )
}