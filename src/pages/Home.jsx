import { useNavigate, Link } from "react-router-dom"
import { useEffect } from "react"
import Navbar from "../components/Navbar"

function Home() {

  const navigate = useNavigate()

  useEffect(() => {
    const logueado = localStorage.getItem("logueado")

    if (logueado !== "true") {
      navigate("/")
    }
  }, [])

  function cerrarSesion() {
    localStorage.removeItem("logueado")
    navigate("/")
  }

  return (
    <>

      <Navbar titulo="Home 😎" />

      <div className="container mt-5">

        <h1>Bienvenido al Home 😎</h1>

        <div className="mt-4">

          <Link
            to="/nuevo-ticket"
            className="btn btn-primary me-2"
          >
            Crear Ticket
          </Link>

          <Link
            to="/tickets"
            className="btn btn-success"
          >
            Ver Tickets
          </Link>

        </div>

        <button
          className="btn btn-danger mt-3"
          onClick={cerrarSesion}
        >
          Cerrar sesión
        </button>

      </div>

    </>
  )

}

export default Home