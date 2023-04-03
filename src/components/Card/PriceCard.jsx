import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const PriceCard = () => {
    const [cards,setCards] =useState([])
    useEffect(()=>{
        fetch('prices.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])
    // console.log(cards)
    return (
        <div className='grid md:grid-cols-3 gap-5 mt-5 ml-11 '>
            {
                cards.map(card=><Product key={card.id} card={card}></Product>)
            }
            
        </div>
    );
};

export default PriceCard;