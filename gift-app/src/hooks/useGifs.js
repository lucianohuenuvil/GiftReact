import { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useGifs = ( category ) => {

    const [state, setState] = useState({
        images: [],
        carga: true
    });


    useEffect ( () =>{

        getGifs(category)
            .then( img => {

                setState({
                    images:[],
                    carga: true
                })
             

                setTimeout( () => {

                    setState ({
                        images: img,
                        carga: false
                    });

                }, 3000);
            
            })
    }, [category])



  return state;
}


