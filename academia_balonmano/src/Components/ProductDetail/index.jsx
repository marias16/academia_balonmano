import { useContext } from 'react'
import { CalendarioContext } from '../../Context'
import XMarkIcon from '../XMarkIcon'
import './styles.css'

const ProductDetail = () => {
    const context = useContext(CalendarioContext)
    const product = context.productToShow 

    return (
        <aside className={`${context.isProductOpen ? 'flex' : 'hidden'} duration-500 product-detail flex flex-col fixed bg-white right-0 border border-black rounded-sm py-6 pl-6 pr-2`}>
            <div className="flex justify-between items-center">
                <h2 className="font-medium text-xl">Ejercicio</h2>
                <div className="cursor-pointer" onClick={() => context.closeProduct()}>
                    <XMarkIcon> </XMarkIcon>
                </div>
            </div>
            <div className="flex flex-col gap-2 overflow-y-auto">
                
                <h1 className="font-bold text-lg mt-5">{product.name}</h1>
                <div className="flex gap-1 flex-wrap">
                    {
                        product.content?.map((tag) => 
                            <span 
                                key={tag}
                                className="bg-slate-200 rounded-lg font-light text-xs px-1"> 
                            {tag} </span>)
                    }
                </div>
                
                <figure>
                    <img 
                    src={`src/assets/data/img/${product.id}.png`}
                    alt="product.name"
                    className="object-cover"
                    />
                </figure>
                
                <section className="flex flex-col">
                    <h2 className="font-bold">Descripción</h2>
                    <p>{product.text}</p>
                    <div className="mt-3 flex flex-col gap-2">
                        { product.players ? 
                            (Object.keys(product.players).map((player) => (
                                <div key={player} className="grid grid-cols-6 gap-2 items-center">
                                    <img src={`src/assets/data/icon/${player}.png`} className="aspect-square w-5 h-5"/>
                                    <p className="text-sm col-span-5">{product.players[player]}</p>
                                </div>
                            )) ) : (null)
                        }
                    </div>
                </section>
                
                <button className="btn mr-2 mt-2 bg-lime-600 hover:bg-lime-700 text-white"> 
                    PROGRAMAR 
                </button>

                <section>
                    <h2 className="font-bold">Detalles técnicos</h2>
                    <div className="mt-3 flex flex-col gap-2">
                        { product.tacticals ? 
                            (Object.keys(product.tacticals).map((player) => (
                                <div key={player} className="grid grid-cols-6 gap-2 items-center">
                                    <img  src={`src/assets/data/icon/${player}.png`} className="aspect-square w-5 h-5"/>
                                    <p className="text-sm col-span-5">{product.tacticals[player]}</p>
                                </div >
                            )) ) : (null)
                        }
                    </div>
                </section>
                

                {
                product.variants ? (
                    <section className="mt-3">
                    <h2 className="font-bold">Variantes</h2>
                    {
                        product.variants.map(variant => (
                            <div key={variant} className="text-sm">
                                <h3 className="font-bold">{variant.name}</h3>
                                <p>{variant.text}</p>
                            </div>
                        ))
                    }
                    </section>
                ) : (null)
                }
            </div>
        </aside>
    )
}

export default ProductDetail