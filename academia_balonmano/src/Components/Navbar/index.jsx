import { NavLink } from "react-router-dom"

const Navbar = () => {
    const activeStyle = "underline underline-offset-4"

    return (
        <nav className="flex justify-between items-center w-full py-5 px-8 font-normal text-sm">
            <ul className="flex items-center gap-3">
                <li className="text-sm font-bold">
                    <NavLink to="/"> AcademiaBalonmano </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/todos"
                        className={({isActive}) =>
                        isActive ? activeStyle : undefined 
                        }> Todos los ejercicios </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/ataque"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined 
                    }>
                    Ataque </NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/defensa"
                    className={({isActive}) =>
                            isActive ? activeStyle : undefined 
                    }> Defensa </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    Hola, Usuario
                </li>
                <li>
                    <NavLink 
                        to="/calendario"
                        className={({isActive}) =>
                                isActive ? activeStyle : undefined 
                    }> Calendario </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/equipos"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined 
                    }> Equipos </NavLink>
                </li>
                <li>
                    <NavLink 
                        to="/usuario"
                        className={({isActive}) =>
                            isActive ? activeStyle : undefined 
                    }> Mi cuenta </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar