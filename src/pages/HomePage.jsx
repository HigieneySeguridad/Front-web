import { Intro } from "../components/Intro"
import { Cards } from "../components/Cards";
import { Services } from "../components/Services";
import { Gallery } from "../components/Gallery";
import { Team } from "../components/Team";
import { Contact } from "../components/Contact";
import { Secciones } from "../components/Secciones";
import { Footer } from "../components/Footer";


export const HomePage = () => {
  return (
    <>

        <Intro/>
        <Services  />
        <Secciones />
        <Cards />
        {/* <Gallery  /> */}  
        <Team  />
        <Contact  /> 
        <Footer /> 

    </>
  )
}

