import { Link, useNavigate } from "react-router-dom"

function Navbar({ titulo }) {

  const navigate = useNavigate()

  function cerrarSesion() {

    localStorage.removeItem("logueado")

    navigate("/")
  }

  return (

    <nav className="navbar navbar-dark bg-dark px-3">

      <span className="navbar-brand">
  {titulo}
      </span>

      <div>

        <Link
          to="/home"
          className="btn btn-outline-light me-2"
        >
          Home
        </Link>

        <Link
          to="/nuevo-ticket"
          className="btn btn-outline-light me-2"
        >
          Nuevo Ticket
        </Link>

        <Link
          to="/tickets"
          className="btn btn-outline-light me-2"
        >
          Tickets
        </Link>

        <button
          className="btn btn-danger"
          onClick={cerrarSesion}
        >
          Logout
        </button>

      </div>

    </nav>
  )
}

export default Navbar