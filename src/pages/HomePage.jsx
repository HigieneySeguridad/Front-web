import React from 'react'
import { Header } from "../components/Header"
import { Features } from "../components/Features";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Gallery } from "../components/Gallery";
import { Team } from "../components/Team";
import { Contact } from "../components/Contact";


export const HomePage = () => {
  return (
    <>
        <Header/>
        <Features />
        <Services  />
        <About  />
        <Gallery  />
        <Team  />
        <Contact  /> 
        

    </>
  )
}
