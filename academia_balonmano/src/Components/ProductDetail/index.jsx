import { useContext } from 'react'
import { CalendarioContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(CalendarioContext)
    const product = context.productToShow 

    return (
        <aside className={`${context.isProductOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed bg-white right-0 border border-black rounded-sm p-6`}>
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xl">Ejercicio</h2>
                <div 
                    className="cursor-pointer"
                    onClick= {() => context.closeProduct()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
            <h1 className="font-bold text-lg mt-5">{product.name}</h1>
            <img 
            src={`src/assets/data/img/${product.id}.png`}
            className="object-cover"
            />
            <p>{product.text}</p>
        </aside>
    )
}

export default ProductDetail