import React, { useEffect, useState } from 'react';

export default function Carousel (){
const [data, setData] = useState([]);



async function requestAPI() {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=cel';
    const response = await fetch(endpoint);
    const result = await response.json();
        setData(result.results);
        console.log(result.results);
    }

    useEffect(() => {
        requestAPI();
    }, []);

    return(
        <div>
    <h1>Carousel</h1>

        {
            data?.map(({id, thumbnail, title, price}) =>(
                <div key={id}>
                    <img src={thumbnail} alt={title} style={ { width: '200px', height: '200px' } }/>
                    <p>{title}</p>
                    <p>R$:{price}</p>
                </div>
            ))
        }
        </div>
    )
}