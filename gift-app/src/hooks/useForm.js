import React, { useState } from 'react'

export const useForm = (estadoinicial) => {

    const [form, setForm] = useState (estadoinicial)


    
   const handleInputChange = (event) => {

    setForm({
        ...form,
        [event.target.name] :event.target.value
    });

  }


  return [form, handleInputChange];



}

