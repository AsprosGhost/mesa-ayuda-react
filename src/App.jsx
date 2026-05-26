import { useState } from "react"

function App() {
  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")
  const [logueado, setLogueado] = useState(false)

  const [nombre, setNombre] = useState("")
  const [problema, setProblema] = useState("")
  const [mensaje, setMensaje] = useState("")

  function manejarLogin(e) {
    e.preventDefault()

    if (usuario === "aspros" && password === "1988") {
      setLogueado(true)
      setMensaje("")
    } else {
      setMensaje("Datos incorrectos 😥")
    }
  }

  function enviarTicket(e) {
    e.preventDefault()

    if (nombre === "" || problema === "") {
      setMensaje("Completa el formulario 😅")
      return
    }

    setMensaje("Ticket enviado correctamente 😎")

    setNombre("")
    setProblema("")
  }

  return (
    <div className="container mt-5">

      {!logueado ? (

        <div className="card shadow p-4 mx-auto" style={{ maxWidth: "400px" }}>
          <h1 className="text-center mb-4">Login</h1>

          <form onSubmit={manejarLogin}>

            <div className="mb-3">
              <label className="form-label">Usuario</label>

              <input
                type="text"
                className="form-control"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Contraseña</label>

              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="btn btn-primary w-100">
              Entrar
            </button>

          </form>
        </div>

      ) : (

        <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
          <h1 className="text-center mb-4">
            Mesa de Ayuda 💻
          </h1>

          <form onSubmit={enviarTicket}>

            <div className="mb-3">
              <label className="form-label">
                Nombre
              </label>

              <input
                type="text"
                className="form-control"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Describe tu problema
              </label>

              <textarea
                className="form-control"
                rows="4"
                value={problema}
                onChange={(e) => setProblema(e.target.value)}
              >
              </textarea>
            </div>

            <button className="btn btn-success w-100">
              Enviar Ticket
            </button>

          </form>
        </div>

      )}

      {mensaje && (
        <div className="alert alert-info mt-3 text-center">
          {mensaje}
        </div>
      )}

    </div>
  )
}

export default App