function Login() {
  return (
    <div className="container mt-5">
      <div
        className="card shadow p-4 mx-auto bg-dark text-white"
        style={{ maxWidth: "400px" }}
      >
        <h1 className="text-center mb-4">Login</h1>

        <input
          type="text"
          className="form-control mb-3"
          placeholder="Usuario"
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Contraseña"
        />

        <button className="btn btn-primary w-100">
          Iniciar Sesión
        </button>
      </div>
    </div>
  )
}

export default Login