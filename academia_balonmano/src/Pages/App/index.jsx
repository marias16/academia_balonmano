import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CalendarioProvider } from '../../Context'
import Home from '../Home'
import Calendario from '../Calendario'
import Login from '../Login'
import Usuario from '../Usuario'
import Categorias from '../Categorias'
import Landing from '../Landing'
import NotFound from '../notfound'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Landing /> },
    { path: "/categorias", element: <Categorias /> },
    { path: "/todos", element: <Home /> },
    { path: "/ataque", element: <Home /> },
    { path: "/defensa", element: <Home /> },
    { path: "/habilidades-basicas", element: <Home /> },
    { path: "/calendario", element: <Calendario /> },
    { path: "/login", element: <Login /> },
    { path: "/*", element: <NotFound /> },
    { path: "/usuario", element: <Usuario /> },
  ]);

  return routes
}

function App() {
  

  return (
    <>
    <CalendarioProvider>
      <BrowserRouter>
          <Navbar />
            <AppRoutes />
        </BrowserRouter>
    </CalendarioProvider>
    </>
  )
}

export default App
