export const Gallery = () => {
  return (

   <div className="galleryContent" data-aos="zoom-in-up">
      <div className="gallery">
           <article className="carta">
                <figure>
                    <img 
                    src="./img/imagenesFondos/asd.jpg" 
                    alt="" />
                    <figcaption>
                      <h3>Insumos</h3>
                    </figcaption>
                </figure>
           </article>

           <article className="carta">
                <figure>
                    <img 
                    src="./img/imagenesFondos/team.jpg" 
                    alt="" />
                    <figcaption>
                      <h3>Equipo</h3>
                    </figcaption>
                </figure>
           </article>

           <article className="carta">
                <figure>
                    <img 
                    src="./img/imagenesFondos/seguridad.jpg" 
                    alt="" />
                    <figcaption>
                      <h3>Seguridad</h3>
                    </figcaption>
                </figure>
           </article>
      </div>
   </div>
  )
};
