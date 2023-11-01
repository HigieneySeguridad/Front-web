import { useState } from 'react';
import { Header } from "./Header"
import Swal from 'sweetalert2'

export const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Operario');


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'role') {
      setRole(value)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const crearUsuario = {
        username,
        password,
        role
    }
        const respuesta = await fetch('http://localhost:3000/registrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(crearUsuario)
        })
      
        if (respuesta.ok){
          Swal.fire({
            icon: 'success',
            title: 'Usuario creado'
          })
        
          console.log("Usuario creado correctamente")
        } else if (respuesta.status === 409){
          Swal.fire({
            icon: 'error',
            title: 'Error, el usuario ya existe'
          })
        } else (console.log("Error al crear el usuario"))
       
  }

  return ( 
    <>
    <Header/>
<form onSubmit={handleSubmit} className='form'>
<h2 className='form-h2'>Crear Usuario</h2>
  <div className="flex-column"><label>Usuario</label></div>
    <input
          type="text"
          name="username"
          value={username}
          onChange={handleInputChange}
          placeholder='Usuario'
          className="inputForm"
          required
        />
   
  
  <div className="flex-column"> <label >Contraseña</label>  </div>
   
    <input
          type="password"
          name="password"
          value={password}
          placeholder='Contraseña'
          onChange={handleInputChange}
          className="inputForm"
          required
        />

   <div className="flex-column"> <label >Tipo de Usuario</label>  </div>  
     <select
        className='roles'
        name='role'
        value={role}
        onChange={handleInputChange}
        required
      > 
        <option value="Operario">Operario</option>
        <option value="Inspector">Inspector</option>
        <option value="Inspector-Externo">Inspector Externo</option>
     </select>
  <button type="submit" style={{height: 50}} className="button-submit">Crear usuario</button> <br />
<img src="./img/icono.png"  style={{marginTop: 25}} className='iconoForm'/>
<p className= 'p '>@ Coryright POLOSEG Formosa 2023</p>
</form>

</>
  );
}

