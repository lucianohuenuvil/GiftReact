import React from 'react'

export const GifItem = ( props) => {

  return (
    <div>GifItem

    {
      props.images.map( gif => (
        <div key={gif.id}>
          <p>{gif.title}</p>
          <img src={gif.url}></img>
        </div>
      ))
    }

    </div>

  )
}
