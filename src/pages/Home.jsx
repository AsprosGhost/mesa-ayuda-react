import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

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
    <div className="container mt-5">
      <h1>Bienvenido al Home 😎</h1>

      <button className="btn btn-danger mt-3" onClick={cerrarSesion}>
        Cerrar sesión
      </button>
    </div>
  )
}

export default Home