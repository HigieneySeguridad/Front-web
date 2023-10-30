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
        <video onLoadedMetadata={event => event.target.muted = true} 
               autoPlay loop className="videofondo"
               src="img/imagenesFondos/video-fondo.mov">
        </video>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <h1>
                  Seguridad e Higiene Industrial
                </h1>
                <p>En nuestro sitio web encontrarás toda la información que necesitas para cumplir con los requisitos de seguridad e higiene industrial.</p>
                <a href="#features" className="btn-custom"> Leer Más </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
   
  );
};
