import React, { useState, useEffect } from "react";
import professionalData from "../data/professionalData";

const ProfessionalAccordion = () => {
  const [groupedData, setGroupedData] = useState({})
  const [types, setTypes] = useState([])

  useEffect(() => {
    const grouped = professionalData.reduce((acumulador, prof) => {
      if (!acumulador[prof.type]) {
        acumulador[prof.type] = []
      }

      acumulador[prof.type].push(prof)
      return acumulador
    }, {})

    setGroupedData(grouped)

    const orderedTypes = Object.keys(grouped).sort((a, b) =>
      a.localeCompare(b, "es")
    )
    setTypes(orderedTypes)
  }, [])

  return (
    <div className="accordion" id="professionalAccordion">
      {types.map((type, index) => (
        <div className="accordion-item" key={type}>
          <h2 className="accordion-header" id={`heading-${index}`}>
            <button className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
              type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${index}`}
              aria-expanded={index === 0 ? "true" : "false"} aria-controls={`collapse-${index}`} >
              {type}
            </button>
          </h2>
          <div
            id={`collapse-${index}`}
            className={`accordion-collapse collapse ${index === 0 ? "show" : "" }`}
            aria-labelledby={`heading-${index}`} data-bs-parent="#professionalAccordion"
          >
            <div className="accordion-body">
              {groupedData[type].map((prof) => (
                <div key={prof.id} className="d-flex align-items-center mb-3">
                  <img className="border border-primary rounded-5 me-2" src={prof.img} alt={prof.name} />
                  <div>
                    <span className="fw-bold">{prof.name}</span> <br /> {prof.specialty}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProfessionalAccordion;
