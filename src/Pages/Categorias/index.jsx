import { NavLink } from "react-router-dom"
import { useContext } from 'react'
import { CalendarioContext } from '../../Context'

import Layout from '../../Components/Layout'
import CategoryTag from '../../Components/CategoryTag'


const Categorias = () => {
    const context = useContext(CalendarioContext)

    return ( 
        <Layout>
            <section className="flex flex-col items-center justify-between mt-10">

            <h1 className="text-xl font-bold text-center">Selecciona los conceptos <br/>a trabajar en el entrenamiento </h1>
                <section className="flex gap-2 py-4 flex-wrap">
                {context.categories.map(category => (<CategoryTag key={category} category={category}/>))}
            </section>
            <p className="font-bold hover:underline"><NavLink to="/todos">Siguiente &gt; </NavLink></p>
            <p className="hover:underline"><NavLink to="/todos">Prefiero explorar todos los ejercicios</NavLink></p>

            </section>
        </Layout>
    )
}

export default Categorias