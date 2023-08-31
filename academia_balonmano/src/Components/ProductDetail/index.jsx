import { useContext } from 'react'
import { CalendarioContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(CalendarioContext)

    return (
        <aside className={`${context.isProductOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed bg-white right-0 border border-black rounded-sm`}>
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Ejercicio</h2>
                <div 
                    className="cursor-pointer"
                    onClick= {() => context.closeProduct()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </aside>
    )
}

export default ProductDetail