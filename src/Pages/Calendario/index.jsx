import { useContext } from 'react'
import { CalendarioContext } from '../../Context'
import Layout from '../../Components/Layout'
import CalendarItem from '../../Components/CalendarItem'

const Calendario = () => {
  const context = useContext(CalendarioContext)
  
    return (
      <Layout>
          <p>Próximos entrenamientos</p>
          <div className="flex flex-col gap-3 w-2/3 items-center">
              {
                    context.calendar.map( data => (
                        <CalendarItem
                            key={data.id}
                            data= {data}
                        />
                    ))
                }
          </div>
              
      </Layout>
    )
  }
  
  export default Calendario