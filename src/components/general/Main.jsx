import React from 'react'
import Services from '../Services'
import Login from '../Login'
import Register from '../Register'
import Professional from '../Professional'
import ProfessionalAccordion from '../ProfessionalAccordion'

const Main = () => {
  return (
    <main>
        <ProfessionalAccordion />
        <Professional />
        <Services />
        <Login />
        <Register />
    </main>
  )
}

export default Main