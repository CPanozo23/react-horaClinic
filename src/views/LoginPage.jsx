import React, { useState } from 'react'
import Swal from 'sweetalert2'
const LoginPage = () => {
  const [email, setEmail] =useState("")
  const [password, setPassword] =useState("")

  const ingresar = (e) =>{
    e.preventDefault()
    //alert("Bienvenido")
    Swal.fire({
      icon: "success",
      title: "Bienvenido",
      showConfirmButton: false,
      timer: 1500
    });
    limpiar()
  }

  const limpiar= () =>{
    setEmail("")
    setPassword("")
  }
  return (
    <main className='container border border-primary rounded p-3'>
      <h2 className='text-center'>Iniciar sesión</h2>
      <form onSubmit={ingresar}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" onChange={(e) => (setEmail(e.target.value))} value={email}/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e) => (setPassword(e.target.value))} value={password} />
        </div>
        <button type="submit" className="btn btn-primary">Ingresar</button>
      </form>
</main>
  )
}

export default LoginPage