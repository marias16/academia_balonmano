import { useRoutes, BrowserRouter } from 'react-router-dom'
import { CalendarioProvider } from '../../Context'
import Home from '../Home'
import Calendario from '../Calendario'
import Login from '../Login'
import Usuario from '../Usuario'
import NotFound from '../notfound'
import Navbar from '../../Components/Navbar'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/entrenamiento", element: <Calendario /> },
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
