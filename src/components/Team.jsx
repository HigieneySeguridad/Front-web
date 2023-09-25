import "../../public/css/team.css"
export const Team = () => {
  return (
    <div className="Team" id="team"
    data-aos="flip-left"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
    >
    <h2 style={{margin: 60}}>Nuestro Equipo de Desarrollo</h2>

    <div className="carta-container">
      <div className="carta">
        <div className="front">
          <img src="img/team/01.jpg" alt="" />
        </div>
        <div className="back">
          <div className="details">
            <div className="caption">
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              quisquam iure in! Corporis expedita consequatur tenetur rem
              ratione saepe, perferendis ipsam alias quam. Libero illum maxime,
              unde itaque ratione "
            </div>
            <h2>Madison Goldbeck</h2>
            <span>Senior Developer</span>

            <div className="social-icon">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="carta">
        <div className="front">
          <img src="../img/team/nahuel.jpeg"
            alt="" width="300" height="400"/>
        </div>
        <div className="back">
          <div className="details">
            <div className="caption">
              " Desarrollador de software motivado y orientado a los resultados, 
              con experiencia demostrada en la mejora del rendimiento del software, 
              en la comprobación y actualización del software existente y 
              en el desarrollo de nuevas funcionalidades de software."
            </div>
            <h2>Paniagua Nahuel</h2>
            <span>Developer Web</span>

            <div className="social-icon">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="carta">
        <div className="front">
          <img src="https://www.tavistockwood.com/wp-content/uploads/2019/03/Frecheville-James-Headshot-300x400.jpg"
            alt="" />
        </div>
        <div className="back">
          <div className="details">
            <div className="caption">
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus
              quisquam iure in! Corporis expedita consequatur tenetur rem
              ratione saepe, perferendis ipsam alias quam. Libero illum maxime,
              unde itaque ratione "
            </div>
            <h2>James Bond</h2>
            <span>CEO</span>

            <div className="social-icon">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script src="https://kit.fontawesome.com/95a02bd20d.js"></script>
</div>
  );
};
