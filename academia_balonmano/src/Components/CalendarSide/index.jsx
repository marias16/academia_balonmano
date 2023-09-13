import { useContext, useState } from 'react'
import { CalendarioContext } from '../../Context'
import { v4 as uuidv4 } from 'uuid';

import XMarkIcon from '../XMarkIcon'
import CalendarItem from '../CalendarItem'
import './styles.css'

const CalendarSide= () => {
    const context = useContext(CalendarioContext)
    const [team, setTeam] = useState('')
    const [date, setDate] = useState('')
    const [notes, setNotes] = useState('')

    const handleDelete = (id) => {
        console.log('ayuda')
        const filteredList = context.calendarList.filter(calendarItem => calendarItem.id !== id)
        context.setCalendarList(filteredList)
    }
    
    const handleSchedule = () => {
        const trainingToAdd = {
            exercises: context.calendarList,
            team: team,
            date: date,
            notes: notes,
            id: uuidv4()
        }

        context.setCalendar(context.calendar.push(trainingToAdd))
        console.log(trainingToAdd)

        context.setCalendarList([])
        setTeam('')
        setNotes('')
        setDate('')
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

            <div className="flex gap-4">
                <div>
                    <p>Equipo</p>
                    <select value={team} onChange={(e) => setTeam(e.target.value)}>
                        <option value="">Selecciona uno</option>
                        <option value="Cadete Femenino">Cadete Femenino</option>
                        <option value="Juvenil Masculino">Juvenil Masculino</option>
                        <option value="Juvenil Femenino">Juvenil Femenino</option>
                    </select>
                </div>
                <div>
                    <p>Fecha</p>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
            </div>

            <p>Ejercicios</p>
            <div className="flex flex-col gap-3 mt-5 h-1/2 overflow-y-auto px-2">
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
            
            
            <div>
                <p>Notas</p>
                <textarea className="w-full" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
            </div>

            <button 
                className='bg-lime-600 hover:bg-lime-700 text-white btn mr-2 mt-2'
                onClick={() => handleSchedule()}> 
                    PROGRAMAR 
            </button>
            
        </aside>
    )
}


export default CalendarSide