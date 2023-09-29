import { useState } from 'react';
import { Link } from 'react-router-dom';
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
<div className='fondopag'>
  
<form onSubmit={handleSubmit} className='form'>
<button className='button-back'>
           <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1000 1024">
            <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z">
            </path>
            </svg>
        <Link to="/homepage">Volver</Link>
  </button>
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
</div>

  );
}

