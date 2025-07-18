import React from 'react'
import servicesData from '../data/servicesData'
import ServiceCard from '../components/ServiceCard'

const ServicesPage = () => {
  return (
    <main className='container'>
      <h2 className='text-center'>Nuestros servicios</h2>

      <section className='row g-3'>
        {servicesData.map(serv => (
            <ServiceCard key={serv.id} serv={serv} />
          ))}
        
      </section>
    </main>
  )
}

export default ServicesPage