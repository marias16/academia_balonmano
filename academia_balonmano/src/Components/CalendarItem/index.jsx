import XMarkIconTiny from "../XMarkIconTiny"

const CalendarItem = ({data}) => {

    return (
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <figure className="w-10 h-10">
              <img 
              src={`src/assets/data/img/${data.id}.png`}
              className="w-full h-full rounded-full object-cover"
              alt={data.name}
              />
            </figure>
            <p className="text-sm font-light">{data.name}</p>
          </div>
          <div>
              <XMarkIconTiny />
          </div> 
        </div>
    )
  }
  
  export default CalendarItem