import { createContext, useState, useEffect } from 'react'
import Data from '../assets/data'

export const CalendarioContext = createContext()

export const CalendarioProvider = ({children}) => {
    //Search exercises
    const [items, setItems] = useState(Data)
    const [filteredItems, setFilteredItems] = useState([])

    //Search exercises · by title
    const [searchByTitle, setSearchByTitle] = useState('')

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.name.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

  
    //Search exercises · by category

    //Get all categories 
    const categories = []
    
    items.forEach(item => item.categories.forEach(category => 
        categories.includes(category) ? undefined : categories.push(category)
    ))
    
    //Get categories selected
    const [searchByCategories, setSearchByCategories] = useState('')
    const filteredItemsByCategories = (items, searchByCategories) => {
        return items?.filter(item => item.categories.filter(category => category === searchByCategories).length > 0)
    }

    //Effect hook for search
    useEffect(() => {
        if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
        if(searchByCategories) setFilteredItems(filteredItemsByCategories(items, searchByCategories))
    }, [items, searchByCategories, searchByTitle])


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
            categories,
            searchByCategories, 
            setSearchByCategories,
            filteredItemsByCategories,
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