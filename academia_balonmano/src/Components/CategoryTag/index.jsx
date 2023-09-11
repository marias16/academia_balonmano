import { useContext } from 'react'
import { CalendarioContext } from '../../Context'

const CategoryTag = ({category}) => {
    const context = useContext(CalendarioContext)
    
    const isSelected = context.searchByCategories === category

    return (
        <span 
            className=
            {`${isSelected ? 'bg-black text-white' :  'bg-white text-black hover:bg-gray-100' }
           border border-gray-800 rounded-lg font-normal text-sm px-2 py-1 cursor-pointer `}
            onClick={() => context.setSearchByCategories(category)}
            > 
            {category} 
        </span>
    )
}

export default CategoryTag