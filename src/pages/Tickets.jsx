import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"

function Tickets() {
  const [tickets, setTickets] = useState([])
  const navigate = useNavigate()

  function editarTicket(idEditar) {
    navigate(`/editar-ticket/${idEditar}`)
  }

  function eliminarTicket(indexEliminar) {
    const nuevosTickets = tickets.filter(
      (_, index) => index !== indexEliminar
    )

    setTickets(nuevosTickets)

    localStorage.setItem(
      "tickets",
      JSON.stringify(nuevosTickets)
    )
  }

  useEffect(() => {
    const ticketsGuardados =
      JSON.parse(localStorage.getItem("tickets")) || []

    setTickets(ticketsGuardados)
  }, [])

  return (
    <>
      <Navbar titulo="Tickets 🎫" />

      <div className="container mt-5">
        <h1>Tickets creados</h1>

        {tickets.length === 0 ? (
          <p>No hay tickets todavía.</p>
        ) : (
          tickets.map((ticket, index) => (
            <div className="card mb-3" key={ticket.id}>
              <div className="card-body">
                <h5>{ticket.titulo}</h5>

                <p>{ticket.descripcion}</p>

                <span className="badge bg-primary">
                  {ticket.prioridad}
                </span>

                <p className="mt-2">
                  Estado: <strong>{ticket.estado}</strong>
                </p>

                <p className="mt-2 text-muted">
                  {ticket.fecha}
                </p>

                <button
                  className="btn btn-danger mt-2"
                  onClick={() => eliminarTicket(index)}
                >
                  Eliminar
                </button>

                <button
                  className="btn btn-warning mt-2 ms-2"
                  onClick={() => editarTicket(ticket.id)}
                >
                  Editar
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  )
}

export default Tickets