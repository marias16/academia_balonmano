import { useContext } from 'react'
import { CalendarioContext } from '../../Context'
import CalendarIcon from '../CalendarIcon'
import CheckIcon from '../CheckIcon'

const Card = ({data}) => {
    const context = useContext(CalendarioContext)

    const addToCalendar = (event, product) => {
        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCalendarList([...context.calendarList, product])
        context.openCalendarSide()
    }

    const openSideCalendar = (event) => {
        event.stopPropagation()
        context.openCalendarSide()
    }

    const showItem = (product) => {
        context.openProduct()
        context.setProductToShow(product)
    }

    const renderIcon = (currentItem) => {
        const isInList = context.calendarList.filter(itemList => itemList.id === currentItem.id).length > 0

        if (isInList) {
            return (
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-lime-600 text-white w-6 h-6 rounded-full m-2 p-1"
                    onClick={(e) => openSideCalendar(e)}
                    >
                    <CheckIcon />
                </div>
            )
        } else {
            return (
                <div 
                    className="absolute top-0 right-0 flex justify-center items-center bg-black text-white w-6 h-6 rounded-full m-2 p-1 hover:w-7 hover:h-7 duration-500"
                    onClick={(event) => addToCalendar(event, data)}
                    >
                    <CalendarIcon />
                </div>
            )
        }
        
    }


    return (
        <div 
            className="cursor-pointer w-56 h-68 hover:bg-slate-100 rounded-sm px-2 py-3 duration-500"
            onClick={() => showItem(data)}
        >
            <figure className="relative mb-2 w-full h-4/5" >
                <span className="absolute bottom-0 left-0 bg-black rounded-lg text-white text-xs m-2 px-3 py-0.5">
                {data.categories[0]}</span>
                <img className="w-full h-full object-cover rounded-lg border-solid border-2 border-black" src={`src/assets/data/img/${data.id}.png`} />
                {renderIcon(data)}
            </figure>
            <p className="font-bold text-sm">{data.name}</p>
        </div>
    )
}

export default Card