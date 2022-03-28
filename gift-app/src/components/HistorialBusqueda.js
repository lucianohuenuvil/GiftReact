import React, { useState, useEffect } from 'react'

export const HistorialBusqueda = (props) => {


    useEffect ( () =>{
        if(props.busqueda !== '')
            addhistorial();

    },[props.busqueda])


    const [historial, setHistorial] = useState([]);

   
    const addhistorial = () => {
        setHistorial([props.busqueda,...historial].splice(0,5));
    }


  return (
      <>
          <div>Historial de Búsqueda</div>

          <div>

              {
                  historial.map ( (data, i) => (
                      <p key={i}> {i} {data} </p>
                  ))
                
              }
   
          </div>

          <hr></hr>
      
      </>


  )
}
