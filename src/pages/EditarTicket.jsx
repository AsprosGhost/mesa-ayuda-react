import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"

function EditarTicket() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [prioridad, setPrioridad] = useState("")
  const [estado, setEstado] = useState("")

  useEffect(() => {
    const ticketsGuardados =
      JSON.parse(localStorage.getItem("tickets")) || []

    const ticketEncontrado = ticketsGuardados.find(
      (ticket) => ticket.id === Number(id)
    )

    if (ticketEncontrado) {
      setTitulo(ticketEncontrado.titulo)
      setDescripcion(ticketEncontrado.descripcion)
      setPrioridad(ticketEncontrado.prioridad)
      setEstado(ticketEncontrado.estado)
    } else {
      alert("Ticket no encontrado")
      navigate("/tickets")
    }
  }, [id, navigate])

  function guardarCambios(e) {
    e.preventDefault()

    const ticketsGuardados =
      JSON.parse(localStorage.getItem("tickets")) || []

    const ticketsActualizados = ticketsGuardados.map((ticket) => {
      if (ticket.id === Number(id)) {
        return {
          ...ticket,
          titulo,
          descripcion,
          prioridad,
          estado
        }
      }

      return ticket
    })

    localStorage.setItem(
      "tickets",
      JSON.stringify(ticketsActualizados)
    )

    alert("Ticket actualizado correctamente 😎")
    navigate("/tickets")
  }

  return (
    <>
      <Navbar titulo="Editar Ticket ✏️" />

      <div className="container mt-4">
        <div className="card shadow p-4 mx-auto" style={{ maxWidth: "600px" }}>
          <h2 className="text-center mb-4">Editar ticket</h2>

          <form onSubmit={guardarCambios}>
            <div className="mb-3">
              <label className="form-label">Título</label>
              <input
                type="text"
                className="form-control"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Descripción</label>
              <textarea
                className="form-control"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Prioridad</label>
              <select
                className="form-select"
                value={prioridad}
                onChange={(e) => setPrioridad(e.target.value)}
              >
                <option value="">Selecciona una prioridad</option>
                <option value="Baja">Baja</option>
                <option value="Media">Media</option>
                <option value="Alta">Alta</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Estado</label>
              <select
                className="form-select"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              >
                <option value="Abierto">Abierto</option>
                <option value="En proceso">En proceso</option>
                <option value="Cerrado">Cerrado</option>
              </select>
            </div>

            <button className="btn btn-success w-100" type="submit">
              Guardar cambios
            </button>

            <button
              className="btn btn-secondary w-100 mt-2"
              type="button"
              onClick={() => navigate("/tickets")}
            >
              Cancelar
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditarTicket