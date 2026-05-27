import { useState } from "react"
import Navbar from "../components/Navbar"

function NuevoTicket() {
  const [titulo, setTitulo] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [prioridad, setPrioridad] = useState("Media")

  function guardarTicket(e) {

  e.preventDefault()

  const nuevoTicket = {

    id: Date.now(),

    titulo,
    descripcion,
    prioridad,
    estado: "Abierto",
    fecha: new Date().toLocaleString()
  }

  const ticketsGuardados =
    JSON.parse(localStorage.getItem("tickets")) || []

  ticketsGuardados.push(nuevoTicket)

  localStorage.setItem(
    "tickets",
    JSON.stringify(ticketsGuardados)
  )

  alert("Ticket creado correctamente 😎")

  setTitulo("")
  setDescripcion("")
  setPrioridad("Media")
}

  return (
    <> 
    
         <Navbar titulo="Nuevo Ticket 🛠️" />
    
    <div className="container mt-5">
      <h1>Nuevo Ticket</h1>

      <form onSubmit={guardarTicket}>
        <input
          className="form-control mb-3"
          placeholder="Título del problema"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <textarea
          className="form-control mb-3"
          placeholder="Describe el problema"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <select
          className="form-control mb-3"
          value={prioridad}
          onChange={(e) => setPrioridad(e.target.value)}
        >
          <option>Baja</option>
          <option>Media</option>
          <option>Alta</option>
        </select>

        <button className="btn btn-primary">
          Guardar Ticket
        </button>
      </form>
    </div>
    </>
  )
}

export default NuevoTicket