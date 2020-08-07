import React, { useEffect, useState } from 'react';
import Gif from './Gif';
import getGifs from '../services/getGifs';

export default function ListOfGifs({ params }) {
    const {keyword} = params;
    const [loading, setLoading] = useState(false);
    const [gifs, setGifs] = useState([]);
    useEffect(() => { /* Se ejecuta cada vez que se renderiza el componente */
        setLoading(true)
        getGifs({ keyword }).then(gifs => {  /* esta keyword es una dependencia del efecto */
            setGifs(gifs) 
            setLoading(false)}
        );
    }, [keyword]); /* Array vacio sin dependencias solo se ejecutará solo una vez */

    if(loading) return <i>Cargando🔥</i>
    return <div>
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    key={id}
                    id={id}
                    title={title}
                    url={url}
                />)
        }
    </div>
}