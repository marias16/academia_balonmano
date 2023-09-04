import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CalendarioProvider } from '../../Context'
import Home from '../Home'
import Calendario from '../Calendario'
import Login from '../Login'
import Usuario from '../Usuario'
import Entrenamientos from '../Entrenamientos'
import NotFound from '../notfound'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/calendario", element: <Calendario /> },
    { path: "/login", element: <Login /> },
    { path: "/entrenamientos", element: <Entrenamientos /> },
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
