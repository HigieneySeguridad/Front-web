import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./archivosMain.css";
import {Link} from "react-router-dom";

export const ArchivosMain = () => {
  const [formularios, setFormularios] = useState([]);

  const obtenerFormularios = async () => {
    try {
      const response = await axios.get('http://localhost:3000/formularios');
      console.log('Respuesta:', response.data);
      if (response.status === 200) {
        setFormularios(response.data);
      }
    } catch (error) {
      console.error('Error al obtener formularios', error);
    }
  };

  useEffect(() => {
    obtenerFormularios();
  }, []);

  return (
    <>
      <h2 className='section-title' style={{ color: 'grey' }}>Historial de Formularios</h2>

    <div className='container-archivos'>
    <h3>Formularios Pendientes:</h3>
        <div className="cards-archivos">    
          {formularios
          .filter(formulario => formulario.estado === 'Pendiente')
          .map((formulario, formularioIndex) => (
            <div key={formularioIndex} className="formulario-card">
                <label>
                <input type="checkbox" className='check' />
                <article>
                    <div className="front">
                    <header>
                        <h3>Formulario {formularioIndex + 1}</h3>
                    </header>
                    <var>{formularioIndex + 1}</var>
                    <h6>User: {formulario.username}</h6>
                    <span>{new Date(formulario.fecha).toLocaleString()}</span>
                    </div>
                    <div className="back">
                    <header>
                        <h3>Formulario {formularioIndex + 1}</h3>
                    </header>
                    <button className='btn btn-info'>
                    <Link to={'/formularios/'+formulario._id}>Ver más</Link>
                    </button>
                    </div>
                </article>
                </label>
                
            </div>
            ))} 
        </div>
    </div>
        

    <div className='aceptados'>
    <h3>Formularios Aceptados:</h3>
        <div className="cards-archivos">    
          {formularios
          .filter(formulario => formulario.estado === 'Aceptado')
          .map((formulario, formularioIndex) => (
            <div key={formularioIndex} className="formulario-card">
                <label>
                <input type="checkbox" className='check' />
                <article>
                    <div className="front">
                    <header>
                        <h3>Formulario {formularioIndex + 1}</h3>
                    </header>
                    <var>{formularioIndex + 1}</var>
                    <h6>User: {formulario.username}</h6>
                    <span>{new Date(formulario.fecha).toLocaleString()}</span>
                    </div>
                    <div className="back">
                    <header>
                        <h3>Formulario {formularioIndex + 1}</h3>
                    </header>
                    <button className='btn btn-info'>
                    <Link to={'/formularios/'+formulario._id}>Ver más</Link>
                    </button>
                    </div>
                </article>
                </label>
            </div>
            ))} 
        </div>
    </div>

    <div className='rechazados'>
    <h3>Formularios Denegados:</h3>
        <div className="cards-archivos">    
          {formularios
          .filter(formulario => formulario.estado === 'Denegado')
          .map((formulario, formularioIndex) => (
            <div key={formularioIndex} className="formulario-card">
                <label>
                <input type="checkbox" className='check' />
                <article>
                    <div className="front">
                    <header>
                        <h3>Formulario {formularioIndex + 1}</h3>
                    </header>
                    <var>{formularioIndex + 1}</var>
                    <h6>User: {formulario.username}</h6>
                    <span>{new Date(formulario.fecha).toLocaleString()}</span>
                    </div>
                    <div className="back">
                    <header>
                        <h3>Formulario {formularioIndex + 1}</h3>  
                    </header>
                    <button className='btn btn-info'>
                    <Link to={'/formularios/'+formulario._id}>Ver más</Link>
                    </button>
                    </div>
                </article>
                </label>
            </div>
            ))} 
        </div>
    </div>
    </>
  );
};
