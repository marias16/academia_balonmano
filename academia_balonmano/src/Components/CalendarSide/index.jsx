import { useContext } from 'react'
import { CalendarioContext } from '../../Context'
import XMarkIcon from '../XMarkIcon'
import CalendarItem from '../CalendarItem'
import './styles.css'

const CalendarSide= () => {
    const context = useContext(CalendarioContext)

    return (
        <aside className={`${context.isCalendarSideOpen ? 'flex' : 'hidden'} calendar-side flex flex-col fixed bg-white right-0 border border-black rounded-sm py-6 pl-6 pr-2`}>
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xl">Calendario</h2>
                <div className="cursor-pointer" onClick={() => context.closeCalendarSide()}>
                    <XMarkIcon> </XMarkIcon>
                </div>
            </div>
            <div className="flex flex-col gap-3 mt-5 overflow-y-auto px-2">
                {
                    context.calendarList?.map( item => (
                        <CalendarItem 
                            key={item.id}
                            data={item}
                        />
                    ))
                }
            </div>
        </aside>
    )
}


export default CalendarSide