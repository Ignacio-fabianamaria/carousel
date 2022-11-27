import React, { useEffect, useRef, useState } from 'react';
import left from '../images/left.png';
import rigth from '../images/right.png';

export default function Carousel() {
    const [data, setData] = useState([]);
    const carousel = useRef(null);

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

    const leftClick = (e) => {
       // e.preventDefault();
        console.log(carousel.current.scrollLeft);
        carousel.current.scrollLeft -= carousel.current.offsetWidth
    }

    const rigthClick = (e) => {
        e.preventDefault();
        console.log(carousel.current.scrollRigth);
        carousel.current.scrollLeft += carousel.current.offsetWidth
    }

    return (
        <div>
            <div className='carousel' ref={carousel}>

                {
                    data?.map(({ id, thumbnail, title, price }) => (
                        <div key={id} className='card-cel'>
                            <img src={thumbnail} alt={title} className='img-card' />
                            <div className='info'>
                                <p className='name-card'> 20% OFF</p>
                                <span>R$:{price}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='buttons'>
                <button type='button'
                    className='left'
                    onClick={leftClick}>
                    <img src={left} alt='left' className='left' />
                </button>
                <button type='button'
                    className='rigth'
                    onClick={rigthClick}>
                    <img src={rigth} alt='rigth' className='rigth' />
                </button>
            </div>
        </div>
    )
}