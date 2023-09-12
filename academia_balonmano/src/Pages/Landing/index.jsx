import { NavLink } from "react-router-dom"
import Layout from "../../Components/Layout"

import './styles.css'

const Landing = () => {

    return (
        <Layout>
        <section className="flex flex-col gap-8 items-center text-center">
            <div className="flex flex-col items-center">
                <img className="w-10 h-10" src="src/assets/data/icon/ball.png"/>
                <h1 className="title text-6xl ">Programa.Entrena. <br/> Gana.</h1>
            </div>
        
            <p className="text-lg">Lleva a tu club al siguiente nivel con Academia Balonmano. <br />
                Todas las herramientas que necesitas en un mismo lugar.
            </p>
        </section>
            
            <section className="flex flex-col gap-3 mt-2">
                <div className="cursor-pointer border px-3 py-5 hover:shadow-md transition-shadow duration-1000">
                    <NavLink
                        to="/categorias">
                    <h2 className="font-bold ">Crea un entrenamiento</h2>
                    <p>Selecciona un concepto a trabajar y programa tu entrenamiento.</p>
                    </NavLink>
                </div>

                <div className="cursor-pointer border px-3 py-5">
                    <h2 className="font-bold text-gray-400">Programa tu trimestre</h2>
                    <p className="text-gray-400">Próximamente disponible.</p>
                </div>
            </section>
            
        </Layout>
    )
}

export default Landing