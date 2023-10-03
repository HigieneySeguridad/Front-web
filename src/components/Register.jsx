import { useState } from 'react';
import { Header } from "./Header"
import { Aside } from "./Aside"

export function Register() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [role, setRole] = useState('');


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'user') {
      setUser(value);
    } else if (name === 'password') {
      setPassword(value);
    } else if (name === 'role') {
      setRole(value)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const crearUsuario = {
        user,
        password,
        role
    }

    try {
        await fetch('http://localhost:3000/registrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(crearUsuario)
        })
       setMensaje("Usuario creado correctamente")
       console.log("Usuario creado correctamente")
    } catch (error) {
      console.error('Error de red:', error);
      setMensaje('Error de red al registrar el usuario');
    }
  }

  return ( 
    <>
    <Aside/>
    <Header/>
<form onSubmit={handleSubmit} className='form'>
<h2 className='form-h2'>Crear Usuario</h2>
  <div className="flex-column"><label>Usuario</label></div>
    <input
          type="text"
          name="user"
          value={user}
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
      > 
        <option value="nada" disabled>Seleccione una opción</option>
        <option value="Operario">Operario</option>
        <option value="Inspector">Inspector</option>
     </select>
  <button type="submit" style={{height: 50}} className="button-submit">Crear usuario</button> <br />
  {mensaje && <div 
  className="alert alert-success" 
  role="alert"
  
  >{mensaje}</div>} 
<img src="./img/icono.png"  style={{marginTop: 25}} className='iconoForm'/>
<p className= 'p '>@ Coryright POLOSEG Formosa 2023</p>
</form>

</>
  );
}

