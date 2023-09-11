import React from 'react'

export const Cards = () => {
  return (
<div className='cards'>
    <div className='container_cards'>
      
      <div className='card'>
         <div className='circle'>
            <h2>Detalles</h2>
         </div>
         <div className='content'>
            <p>Aqui encontraras todos los detalles de la pagina con solo un click en el boton
               
            </p>
            <a href="#">Leer Más Aqui</a>
         </div>
      </div>
      <div className='card'>
         <div className='circle'>
            <h2>Consultas</h2>
         </div>
         <div className='content'>
            <p>Aqui puedes enviar consultas respondiendo un formulario breve</p>
            <a href="#">Leer Más</a>
         </div>
      </div>
      <div className='card'>
         <div className='circle'>
            <h2>Contenido</h2>
         </div>
         <div className='content'>
            <p>Dale a Leer Mas para saber todo el contenido</p>
            <a href="#">Leer Más</a>
         </div>
      </div>
      
    </div>
</div>
  )
}

