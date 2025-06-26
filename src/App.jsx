import { useState } from 'react'
import './App.css'
import Navbar from './components/general/Navbar'
import Footer from './components/general/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './views/HomePage'
import ServicesPage from './views/ServicesPage'
import ProfessionalPage from './views/ProfessionalPage'
import LoginPage from './views/LoginPage'
import RegisterPage from './views/RegisterPage'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/servicios' element={<ServicesPage/>} />
          <Route path='/profesionales' element={<ProfessionalPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/registro' element={<RegisterPage/>} />
      </Routes> 
      <Footer />
    </>
  )
}

export default App
