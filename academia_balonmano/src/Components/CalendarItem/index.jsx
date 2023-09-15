const CalendarItem = ({data}) => {
  

    return (
        <>
        <div className="flex flex-col justify-between items-start w-2/3 border border-black p-3">
            <h1 className="font-bold">Entrenamiento</h1>
            <p ><span className="font-semibold">Fecha:</span> {data.date}</p>
            <p><span className="font-semibold">Equipo:</span> {data.team} </p>

          <div >
            <p className="font-semibold">Lista de ejercicios</p>
            <ul>
            {
              data.exercises?.map(exercise => 
                (
                  <li key={exercise.id}>{exercise.name}</li>
                )
              )
            }
            </ul>
          </div>

          <div>
            <p className="font-semibold">Notas</p>
            <p>{data.notes}</p>
          </div>
          
        </div>
        </>
    )
  }
  
  export default CalendarItem