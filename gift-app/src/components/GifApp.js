import React, { useState } from 'react'

export const GifApp = () => {

  //const peliculas = ['Avengers','Harry Potter','Dragon ball z'];


  const [peliculas, setPeliculas] = useState(['Avengers','Harry Potter','Dragon ball z'])

  //const [first, setfirst] = useState(second)

  const addFilm = () =>{
    setPeliculas([...peliculas,'Batman'])
  }

  return (

    <div>
     

        <button onClick={ addFilm }>Agregar Pelicula</button>

      {
        peliculas.map((pelicula, i) => {
          return <h2 key={i}> {pelicula}</h2>
        })
      }
    </div>
  )
}