import { createContext, useState, useEffect } from 'react'
import Data from '../assets/data'

export const CalendarioContext = createContext()

export const CalendarioProvider = ({children}) => {
    //Search exercises
    const [items, setItems] = useState(Data)
    const [filteredItems, setFilteredItems] = useState([])
    const [searchByTitle, setSearchByTitle] = useState('')

    const filteredItemsByTitle = (aaa, bbb) => {
        return aaa?.filter(item => item.name.toLowerCase().includes(bbb.toLowerCase()))
    }

    useEffect(() => {
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [items, searchByTitle])

    //Product Detail · Open
    const [isProductOpen, setProductOpen] = useState(false)
    const openProduct = () => setProductOpen(true)
    const closeProduct = () => setProductOpen(false)

    //Product Detail · Show product
    const [productToShow, setProductToShow] = useState({})

    //Calendar
    const [calendarList, setCalendarList] = useState([])
   

    //Calendar · Side-menu
    const [isCalendarSideOpen, setCalendarSideOpen] = useState(false)
    const openCalendarSide = () => setCalendarSideOpen(true)
    const closeCalendarSide = () => setCalendarSideOpen(false)



    return (
        <CalendarioContext.Provider value={({
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems, 
            setFilteredItems,
            filteredItemsByTitle,
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