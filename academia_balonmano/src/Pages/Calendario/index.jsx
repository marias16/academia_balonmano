import { useContext } from 'react'
import { CalendarioContext } from '../../Context'
import CalendarItem from '../../Components/CalendarItem'

function Calendario() {
  const context = useContext(CalendarioContext)

    return (
      <>
          <p>Próximos entrenamientos</p>
              {
                    context.calendar?.map( data => (
                        <CalendarItem
                            key={data.id}
                            data= {data}
                        />
                    ))
                }
      </>
    )
  }
  
  export default Calendario