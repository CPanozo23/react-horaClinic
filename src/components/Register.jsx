import React, { useState } from 'react'
import Swal from 'sweetalert2'

const Register = () => {
  const [email, setEmail] =useState("")
  const [name, setName] =useState("")
  const [lastName, setlastName] =useState("")
  const [password, setPassword] =useState("")
  const [listErrors, setListErrors] = useState([])

    const registrar = (e) =>{
      e.preventDefault()
      if(validar()){
          Swal.fire({
          icon: "success",
          title: "Usuario creado",
          showConfirmButton: false,
          timer: 1500
        });
      limpiar()
      }else{
        Swal.fire({
          icon: "warning",
          title: "Faltan datos",
          showConfirmButton: false,
          timer: 1500
        });
      }
      
    }
  
    const limpiar= () =>{
      setEmail("")
      setName("")
      setlastName("")
      setPassword("")
      setListErrors([])
    }

    const validar = () =>{
      const errors = []
      if (!email.trim()) errors.push("Debe ingresar email")
      if (!name.trim()) errors.push("Debe ingresar nombre")
      if (!lastName.trim()) errors.push("Debe ingresar apellido")
      if (!password.trim()) {
        errors.push("Debe ingresar password")
      }else if(password.length<6){
          errors.push("La password debe tener al menos 6 caracteres")
      }

      setListErrors(errors)
      return errors.length===0
      
    }
  return (
    <section className='container border border-primary rounded p-3'>
      <h2 className='text-center'>Formulario de registro</h2>
      <ul className='text-danger'>
      {listErrors.map((error, index) => (
        <li key={index}>{error}</li>
      ))}
      </ul>
      <form className='row' onSubmit={registrar}>
  <div className="mb-3 col-6">
    <label htmlFor="inputEmail" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" onChange={(e) => (setEmail(e.target.value))} value={email}/>
    <div id="emailHelp" className="form-text">hola@horaclinic.cl</div>
  </div>
  <div className="mb-3 col-6">
    <label htmlFor="inputName" className="form-label">Nombre</label>
    <input type="type" className="form-control" id="inputName" aria-describedby="nameHelp" onChange={(e) => (setName(e.target.value))} value={name} />
    <div id="nameHelp" className="form-text">Ingrese su nombre</div>
  </div>
  <div className="mb-3 col-6">
    <label htmlFor="inputLastName" className="form-label">Apellido</label>
    <input type="type" className="form-control" id="inputLastName" aria-describedby="lastNameHelp" onChange={(e) => (setlastName(e.target.value))} value={lastName} />
    <div id="lastNameHelp" className="form-text">Ingrese su apellido</div>
  </div>
  <div className="mb-3 col-6">
    <label htmlFor="inputPassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword" onChange={(e) => (setPassword(e.target.value))} value={password} />
  </div>
 
  <button type="submit" className="btn btn-primary">Registrarse</button>
</form>
    </section>
  )
}

export default Register