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
        <div className='carousel'>

        {
            data?.map(({id, thumbnail, title, price}) =>(
                <div key={id} className='card-cel'>
                    <img src={thumbnail} alt={title} className='img-card'/>
                    <div className='info'>
                    <p className='name-card'> 20% OFF</p>
                    <span>R$:{price}</span>
                    </div>
                </div>
            ))
        }
        </div>
    )
}