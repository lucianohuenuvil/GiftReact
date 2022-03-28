import React, { useState } from 'react'

export const Addcount = () => {

  const [state, setState] = useState(0);


  const increment = () => {

    setState( state + 1 );

  }

  const decrement = () => {

    setState( state - 1 );

  }


  return (
    <>
      <div>Addcount</div>

      <h1> {state}</h1>


      <button onClick={ increment }> +1 </button>
      <button onClick={ decrement }> -1 </button>
    </>
  )
}
