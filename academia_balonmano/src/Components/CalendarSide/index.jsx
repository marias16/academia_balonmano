import { useContext } from 'react'
import { CalendarioContext } from '../../Context'
import XMarkIcon from '../XMarkIcon'
import CalendarItem from '../CalendarItem'
import './styles.css'

const CalendarSide= () => {
    const context = useContext(CalendarioContext)

    const handleDelete = (id) => {
        console.log('ayuda')
        const filteredList = context.calendarList.filter(calendarItem => calendarItem.id !== id)
        context.setCalendarList(filteredList)
    }
    
    const emptyMessage = <p>Añade un ejercicio para empezar a programar tu entrenamiento.</p>

    return (
        <aside className={`${context.isCalendarSideOpen ? 'flex' : 'hidden'} calendar-side flex flex-col fixed bg-white right-0 border border-black rounded-sm py-6 pl-6 pr-2`}>
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xl">Entrenamiento</h2>
                <div className="cursor-pointer" onClick={() => context.closeCalendarSide()}>
                    <XMarkIcon> </XMarkIcon>
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-5 overflow-y-auto px-2">
            { context.isCalendarSideOpen && context.calendarList.length === 0 ? emptyMessage : undefined}
                {
                    context.calendarList?.map( data => (
                        <CalendarItem 
                            key={data.id}
                            name= {data.name}
                            id={data.id}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
        </aside>
    )
}


export default CalendarSide