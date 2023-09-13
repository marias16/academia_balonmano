const CalendarItem = data => {
  

    return (
        <>
        <div className="flex flex-col justify-between items-center border border-black">
          <div className='flex'>
            <h1>Entrenamiento número {data.id}</h1>
            <p>{data.date}</p>
            <p>{data.team}</p>
          </div>

          <div >
            <p>Lista de ejercicios</p>
            <ul>
            {
              data.exercises?.map(exercise => {
                (
                  <li>{exercise.name}</li>
                )
              })
            }
            </ul>
          </div>

          <div>
            <p>Notas</p>
            <p>{data.notes}</p>
          </div>
          

          <p>{data.notes}</p>
        </div>
        </>
    )
  }
  
  export default CalendarItem