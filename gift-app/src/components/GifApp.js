import React from 'react'

export const GifApp = () => {

  const peliculas = ['Avengers','Harry Potter','Dragon ball z'];

  return (
    <div>
      {
        peliculas.map(pelicula => {
          return <h2 key={pelicula}> {pelicula}</h2>
        })
      }
    </div>
  )
}