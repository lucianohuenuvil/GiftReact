import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/components.css'

export const Adduser = () => {


   const [userForm, handleInputChange]  = useForm({
     nombre:'',
     apellido: ''
   });

   const {nombre, apellido} = userForm;


   const [user, setUser]  = useState([]);


   const submitForm = (event) => {
      event.preventDefault();

      if ( nombre.trim().length > 2 && apellido.trim().length > 2){
        setUser([userForm,...user]);
      }
    

   }






  return (
      <>
          <h1>Añadir usuario</h1>

          <form  onSubmit={ submitForm }> 

            <div className='form-group margin'>
                <label>Nombre:</label>
                <input className='form-control' type="text" name="nombre" placeholder='INGRESA TU NOMBRE' value={nombre} onChange = {handleInputChange} />
            </div>
           
            <div className='form-group margin'>
                <label>Apellido:</label>
                <input className='form-control' type="text" name="apellido" placeholder='INGRESA TU APELLIDO' value={apellido} onChange ={handleInputChange} />
            </div>
            
            <div className='form-group margin'>
                <input className='btn btn-primary' type="submit" />
            </div>
  

         </form>




         <hr></hr>


         <div>
            <h1>users:</h1>


            {
              user.map( (userData, i) => (
                <div key = {i}>
                    <strong> Nombre: </strong> {userData.nombre} - <strong>Apellido: </strong>{userData.apellido}
                </div>
                
              ))
            }


            <hr></hr>



     
         </div>
      
      </>

  )
}
