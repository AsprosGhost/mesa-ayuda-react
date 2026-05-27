import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

import Login from "./components/Login"
import Home from "./pages/Home"
import NuevoTicket from "./pages/NuevoTicket"
import Tickets from "./pages/Tickets"
import EditarTicket from "./pages/EditarTicket"

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/nuevo-ticket" element={<NuevoTicket />} />

        <Route path="/tickets" element={<Tickets />} />
        
        <Route path="/editar-ticket/:id" element={<EditarTicket />} />
        
      </Routes>

    </BrowserRouter>

  )
}

export default App