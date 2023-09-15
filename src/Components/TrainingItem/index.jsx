import XMarkIconTiny from "../XMarkIconTiny"

const TrainingItem = props => {
    const {name, id, handleDelete} = props
  

    return (
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <figure className="w-10 h-10">
              <img 
              src={`src/assets/data/img/${id}.png`}
              className="w-full h-full rounded-full object-cover"
              alt={name}
              />
            </figure>
            <p className="text-sm font-light">{name}</p>
          </div>
          <div
          onClick={() => handleDelete(id)}
          >
              <XMarkIconTiny
               />
          </div> 
        </div>
    )
  }
  
  export default TrainingItem