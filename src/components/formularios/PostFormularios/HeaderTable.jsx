import React from 'react'

export const HeaderTable = () => {
  return (
    <div>
        <table>
            <thead>
                <tr style={{height: 20}}>
                    <th style={{width: 20}}>Icono Refsa</th>
                    <th>
                        <h2>ATS- ANALISIS DE TRABAJO SEGURO</h2>
                    </th>
                    
                </tr>
                 <tr>
                 <tr> 
                        <th>

                        <label htmlFor="">Fecha:</label>
                        <input type="date"  />
                        </th>
                        <th>

                        <label htmlFor="">Area o sector:</label>
                        <input type="text"  />
                        </th>
                       
                    </tr>
                    <tr>
                        <th>
                        <label htmlFor="">Empresa:</label>
                        <input type="text"  />
                        </th>
                        <th>
                        <label htmlFor="">N° Permiso de Trabajo</label>
                        <input type="number" />
                        </th>
                    </tr>
                    <tr>
                         <th colSpan={2}>
                        <label htmlFor="">Yacimiento:</label>
                        <input type="text"  />
                         </th>
                    </tr>
                    <tr>
                    <th colSpan={2}>
                    <label htmlFor="" style={{color: 'black'}}>Tarea a Ejecutar:</label>
                    <input type="text"/>
                    </th>
                    </tr>
                    <th>
                        Trabajos Peligrosos
                    </th>
            
                 </tr>
                
            </thead>
        </table>
    </div>
  )
}

