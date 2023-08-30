import './App.css'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Calendario from '../Calendario'
import Login from '../Login'
import Usuario from '../Usuario'
import Equipos from '../Equipos'
import NotFound from '../notfound'
import Navbar from '../../Components/Navbar'
import Layout from "../../Components/Layout"

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/calendario", element: <Calendario /> },
    { path: "/login", element: <Login /> },
    { path: "/equipos", element: <Equipos /> },
    { path: "/*", element: <NotFound /> },
    { path: "/usuario", element: <Usuario /> },
  ]);

  return routes
}

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
