import { Header } from "./Header"

export const Intro = () => {
  return (
    <>
    <Header/>
      <div className="intro"  
     data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"
        
      >
        <video onLoadedMetadata="this.muted=true" autoPlay loop
        src="img/imagenesFondos/video-fondo.mov" className="videofondo">
        </video>
        <div className="overlay">
          
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  Seguridad e Higiene Industrial
                  <span></span>
                </h1>
                <p>En nuestro sitio web encontrarás toda la información que necesitas para cumplir con los requisitos de seguridad e higiene industrial.</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Leer Más
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
   
  );
};
