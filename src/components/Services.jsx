import React from 'react'
import servicesData from '../data/servicesData'

const Services = () => {
  return (
    <section className='container'>
      <h2 className='text-center'>Nuestros servicios</h2>

      <section className='row g-3'>
        {servicesData.map(serv => (
          <article className='col-6' key={serv.id}>
          <div class="card">
            <img src={serv.image} class="card-img-top" alt={serv.name} />
            <div class="card-body">
              <h5 class="card-title">{serv.name}</h5>
              <p class="card-text">{serv.description}</p>
            </div>
          </div>
        </article>
          ))}
        
      </section>
    </section>
  )
}

export default Services