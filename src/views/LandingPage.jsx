import { Intro } from "../components/Intro"
import { Cards } from "../components/Cards";
import { Services } from "../components/services";
import { Contact } from "../components/contact";
import { Secciones } from "../components/Secciones";
import { Footer } from "../components/Footer";


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

