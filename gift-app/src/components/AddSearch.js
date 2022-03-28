import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'


export const AddSearch = ( prop ) => {

    //const [inputValue, SetInputValue] = useState('')

    // const evaluarInput = ( event ) => {
    //     SetInputValue(event.target.value)
    // }





    const [{busqueda}, handleInputChange]  = useForm({
        busqueda:''
      });






    const enviarFormulario = ( event ) => {
        event.preventDefault() //Evita que la pagina recargue al enviar el submit
        if (busqueda.trim().length > 2){
            prop.setBusqueda( busqueda );
        }else{
            alert("Debe contener mas de 2 caracteres")
        }
    }



  return (
    <>
        <div>
            <h2> Añadir categoría </h2>
            <form onSubmit={enviarFormulario}>
                <label>Ingresa un texto</label>
                <input type="text" value={busqueda} onChange={ handleInputChange } name="busqueda"/>
                <input type="submit"/>
            </form>
        </div>

    </>
  )
}
