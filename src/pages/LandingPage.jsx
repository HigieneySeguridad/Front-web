import { Intro } from "../components/Intro"
import { Cards } from "../components/Cards";
import { Services } from "../components/Services";
import { Team } from "../components/Team";
import { Contact } from "../components/Contact";
import { Secciones } from "../components/Secciones";
import { Footer } from "../components/Footer";


export const LandingPage = () => {
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

