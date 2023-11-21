import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./archivosMain.css";

export const ArchivosMain = () => {
  const [formularios, setFormularios] = useState([]);

  useEffect(() => {
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

    obtenerFormularios();
  }, []);

  const handleAceptar = async (id) => {
    try {
        await axios.put(`http://localhost:3000/formularios/${id}`, { estado: 'Aceptado' });
        console.log('Formulario Aceptado');
      } catch (error) {
        console.error('Error al actualizar el estado del formulario', error);
      }
  };

  const handleRechazar = async (id) => {
    try {
      await axios.put(`http://localhost:3000/formularios/${id}`, { estado: 'Denegado' });
      console.log('Formulario Denegado');
      
    } catch (error) {
      console.error('Error al actualizar el estado del formulario', error);
    }
  };


  return (
    <>
      <h2 className='section-title' style={{ color: 'grey' }}>Historial de Formularios</h2>
      <h4>Formularios Pendientes:</h4>
    <div className='container-archivos'>
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
                        <span className="material-symbols-outlined">open</span>
                    </header>
                    <var>{formularioIndex + 1}</var>
                    <h6>User: {formulario.username}</h6>
                    <span>{new Date(formulario.fecha).toLocaleString()}</span>
                    </div>
                    <div className="back">
                    <header>
                        <h3>Formulario {formularioIndex + 1}</h3>
                        <span className="material-symbols-outlined"> close </span>
                    </header>
                    <p>Comentario: {formulario.comentario}</p>
                    <button className='btn btn-info'>Ver más</button>
                    </div>
                </article>
                </label>
                <div className='botonesGrupo'>
                  <button style={{ marginRight: 15 }} className="btn btn-success" onClick={() => handleAceptar(formulario._id)}>Aceptar</button>
                  <button style={{ marginRight: 15 }} className="btn btn-danger" onClick={() => handleRechazar(formulario._id)}>Rechazar</button>
                </div>
            </div>
            ))} 
        </div>
    </div>
        
    <h4>Formularios Aceptados:</h4>
    <div className='container-archivos'>
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
                        <span className="material-symbols-outlined">open</span>
                    </header>
                    <var>{formularioIndex + 1}</var>
                    <h6>User: {formulario.username}</h6>
                    <span>{new Date(formulario.fecha).toLocaleString()}</span>
                    </div>
                    <div className="back">
                    <header>
                        <h3>Formulario {formularioIndex + 1}</h3>
                        <span className="material-symbols-outlined"> close </span>
                    </header>
                    <p>Comentario: {formulario.comentario}</p>
                    <button className='btn btn-info'>Ver más</button>
                    </div>
                </article>
                </label>
            </div>
            ))} 
        </div>
    </div>
    <h4>Formularios Denegados:</h4>
    <div className='container-archivos'>
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
                        <span className="material-symbols-outlined">open</span>
                    </header>
                    <var>{formularioIndex + 1}</var>
                    <h6>User: {formulario.username}</h6>
                    <span>{new Date(formulario.fecha).toLocaleString()}</span>
                    </div>
                    <div className="back">
                    <header>
                        <h3>Formulario {formularioIndex + 1}</h3>  
                        <span className="material-symbols-outlined"> close </span>
                    </header>
                    <p>Comentario: {formulario.comentario}</p>
                    <button className='btn btn-info'>Ver más</button>
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
