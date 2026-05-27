import { useState } from "react"
import { useNavigate } from "react-router-dom" 
import Boton from "./Boton"

function Login() {

  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")
  const [mensaje, setMensaje] = useState("")
  const navigate = useNavigate()

  function manejarLogin() {

    console.log("click detectado")

    if (usuario === "" || password === "") {
      setMensaje("Llena todos los campos 😅")

    } else if (usuario === "admin" && password === "1234") {
      localStorage.setItem("logueado","true")
      navigate("/Home")

    } else {
      setMensaje("Usuario o contraseña incorrectos")
    }
  }

  return (
    <div className="container mt-5">

      <div
        className="card shadow p-4 mx-auto bg-dark text-white"
        style={{ maxWidth: "400px" }}
      >

        <h1 className="text-center mb-4">
          Login
        </h1>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

      <div onClick={manejarLogin}>
  <Boton texto="Iniciar Sesión" />
</div>

        <p className="mt-3 text-center">
          {mensaje}
        </p>

      </div>
    </div>
  )
}

export default Login