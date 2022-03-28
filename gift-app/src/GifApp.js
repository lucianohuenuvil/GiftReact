import React, { useState } from 'react'
import { AddSearch } from './components/AddSearch'
import { GifContainer } from './components/GifContainer'
import { Addcount } from './components/Addcount'
import { Adduser } from './components/Adduser'

import './styles/index.css'

export const GifApp = () => {

  const [busqueda, setBusqueda] = useState('')



  return (


  
      <div className='container'>
          

          <div className='adduser-container'>
            <h1>App GIF</h1>
            <Adduser></Adduser>
          </div>


          <div className='addcount-container'>
            <Addcount></Addcount>
          </div>

          <hr></hr>


          <div className='addsearch-container'>
            <AddSearch setBusqueda = {setBusqueda} ></AddSearch>
          </div>
         

          <hr></hr>

          <div className='gift-container'>
              <GifContainer busqueda={busqueda}></GifContainer>
          </div>



      </div>
  )
}