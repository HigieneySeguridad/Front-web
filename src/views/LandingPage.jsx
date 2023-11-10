import { Intro } from "../components/Intro/Intro"
import { Cards } from "../components/Cards/Cards";
import { Services } from "../components/Services/services";
import { Contact } from "../components/Contact/contact";
import { Secciones } from "../components/Secciones/Secciones";
import { Footer } from "../components/Footer/Footer";


export const LandingPage = () => {
  return (
    <>

        <Intro/>
        <Services  />
        <Secciones />
        <Cards />
        <Contact  /> 
        <Footer /> 

    </>
  )
}

