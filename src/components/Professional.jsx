import React, { useEffect, useState } from 'react'
import professionalData from '../data/professionalData'
import ProfessionalCard from './ProfessionalCard'
import specialtyData from '../data/specialtyData'

const Professional = () => {
    //[3]Guardar la selección del filtrado
    const [filter, setFilter] = useState("Todos")
    //[1] Obtener listado de especialidades desde data
    const [specialtyList, setSpecialtyList] = useState([])
    useEffect(() => {
      setSpecialtyList(specialtyData)
    }, [])
    //[5] Filtrar
    const professional = filter === "Todos" ? professionalData :
    professionalData.filter(prof => prof.specialty === filter)
  return (
    <section className='container' >
        <h2>Selecciona a uno de nuestros profesionales</h2>
        {/*[2] Enlistar especialidades*/}
        <select onChange={(e) => setFilter(e.target.value)}>
          {specialtyList.map(spec => (
            <option key={spec.id} value={spec.specialty}>{spec.type} - {spec.specialty}</option>
          ))}
        </select>
        {/*[4] Agregar onChange*/}
        <section className='row g-3'>
            {professional.map(prof => (
                <ProfessionalCard key={prof.id} prof={prof} />
            ))}
        </section>
    </section>
  )
}

export default Professional