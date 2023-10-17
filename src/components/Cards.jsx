
export const Cards = () => {
  return (
   <div id="cards" className="cards background-cards" 
   data-aos="flip-right"
   data-aos-easing="ease-out-cubic"
   data-aos-duration="2000">
          <h1>Nuestras Propuestas</h1>
           
    <div className='container_cards'>
      <div className='card'>
         <div className='circle'>
            <h2>Misión</h2>
         </div>
         <div className='content'>
            <p>
            Nuestro software se encarga de proporcionar las mejores soluciones a las necesidades en Higiene y Seguridad en el trabajo y Gestión Ambiental, priorizando minimizar los riesgos y costos laborales.
            </p>
            <a href="#">Leer Más</a>
         </div>
      </div>
      <div className='card'>
         <div className='circle'>
            <h2>Vision</h2>
         </div>
         <div className='content'>
            <p>
            Consideramos que la prevención es una herramienta fundamental para mejorar el desempeño de la empresa, favoreciendo la reducción de costos por accidentes de trabajo, evitando sanciones o multas. 
            </p>
            <a href="#">Leer Más</a>
         </div>
      </div>
      <div className='card'>
         <div className='circle'>
            <h2>Objetivos</h2>
         </div>
         <div className='content'>
           
            <p>
               * Mejorar la calidad en materia de seguridad e higiene industrial de la empresa.
            </p>
         
           
           
           <p>
              * Aumentar la rentabilidad y productividad de manera segura y confiable
           </p>

          

            <a href="#">Leer Más</a>
         </div>
      </div>
      </div>
    </div>

  )
}

