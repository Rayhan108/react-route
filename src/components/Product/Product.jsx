import React from 'react';
import Feature from '../Feature/Feature';

const Product = ({card}) => {
    // console.log(card)
    return (
        <div className=' p-5 bg-slate-300 flex flex-col' >
            <div className=' text-center'>
            <span className='font-extrabold text-5xl'>{card.price}</span><span>/month</span>
            </div>
            <h3 className='text-center text-3xl font-semibold text-purple-600 py-3'>{card.name}</h3>
            <p>Features:</p>
            {
                card.features.map((feature,index)=><Feature key={index} feature={feature}></Feature>)
            }
            <button className='w-full mt-auto bg-green-400 py-2 rounded-md text-white font-bold'>Buy Now</button>
        </div>
    );
};

export default Product;