import React from 'react'

const ProfessionalCard = ({prof}) => {
  return (
    <article className='col-3'>
        <div className="card">
            <img src={prof.img} className="card-img-top" alt={prof.name} />
            <div className="card-body">
                <h5 className="card-title">{prof.name} </h5>
                <p className="card-text">{prof.type} | {prof.specialty}</p>
                <a href="#" className="btn btn-primary">Agendar</a>
            </div>
</div>
    </article>
  )
}

export default ProfessionalCard