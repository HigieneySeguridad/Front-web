import React from 'react'
import { GetProteccion } from './GetFormularios/GetProteccion'
import { GetPeligros } from './GetFormularios/GetPeligros'
import { GetRiesgos } from './GetFormularios/GetRiesgos'
import { GetMedidas } from './GetFormularios/GetMedidas'

export const MostrarForms = () => {
  return (
    <div style={{display: "grid", placeItems: 'center'}}>
      <GetProteccion/>
      <GetPeligros/>
      <GetRiesgos/>
      <GetMedidas/>
    </div>
  )
}


