import { useContext } from 'react'
import { CalendarioContext } from '../../Context'
import CalendarItem from '../../Components/CalendarItem'

function Calendario() {
  const context = useContext(CalendarioContext)

    return (
      <>
          <p>Calendario</p>
          <ul>
            {
              context.calendarList?.map(item => 
                (<CalendarItem data={item} key={item.id}/>) 
              )
            }
          </ul>
      </>
    )
  }
  
  export default Calendario