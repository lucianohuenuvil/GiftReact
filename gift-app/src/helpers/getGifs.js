const apiKey = 'JN2WCABpLsKMLFE87Vz51v5LLV0Awyc1';

export const getGifs = async ( busqueda ) => {
    
    const peticion = await fetch(`https://api.giphy.com/v1/gifs/search?q=${busqueda}&limit=20&api_key=${apiKey}`);
    const { data } = await peticion.json();

    const gif = data.map( gifs => {
        return{
            id:gifs.id,
            title:gifs.title,
            url:gifs.images.downsized_medium.url
        }
    })

    //.then(console.log("exito") );
    console.log("repetido")
    return gif;
  
} 
