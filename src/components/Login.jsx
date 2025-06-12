import React, { useState } from 'react'
import Swal from 'sweetalert2'
const Login = () => {
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
    <section className='container border border-primary rounded p-3'>
      <h2 className='text-center'>Iniciar sesión</h2>
      <form onSubmit={ingresar}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email</label>
          <input type="email" class="form-control" id="exampleInputEmail1" onChange={(e) => (setEmail(e.target.value))} value={email}/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" onChange={(e) => (setPassword(e.target.value))} value={password} />
        </div>
        <button type="submit" class="btn btn-primary">Ingresar</button>
      </form>
</section>
  )
}

export default Login