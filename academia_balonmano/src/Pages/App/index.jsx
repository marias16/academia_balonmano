import './App.css'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Calendario from '../Calendario'
import Detalle from '../Detalle'
import Login from '../Login'
import Usuario from '../Usuario'
import Equipos from '../Equipos'
import NotFound from '../notfound'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/calendario", element: <Calendario /> },
    { path: "/login", element: <Login /> },
    { path: "/equipos", element: <Equipos /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes
}

function App() {
  

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
