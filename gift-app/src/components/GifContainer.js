import React, { useState,useEffect } from 'react'
import { GifItem } from './GifItem'
//import { getGifs } from '../helpers/getGifs'
import { HistorialBusqueda } from './HistorialBusqueda'
import { useGifs } from '../hooks/useGifs'

export const GifContainer = ({busqueda}) => {


  const {carga, images} = useGifs(busqueda);

  return (
    <div>
        
        <div>
            <h4>Historial</h4>
            <HistorialBusqueda busqueda = {busqueda}></HistorialBusqueda>
        </div>
        <h1>{busqueda}</h1>


        { carga && <p>CARGANDO....</p> }

        <div>

          <GifItem images = {images}></GifItem>
          
        </div>
        
        
    </div>

    
  )
}
