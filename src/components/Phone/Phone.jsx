import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phone = () => {
    const [phones,setPhones]=useState([])
    useEffect(()=>{
axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
.then(data=>{
    const loadPhone =data.data.data;
    const phonesData=loadPhone.map(phone=>{
        const parts =phone.slug.split('-');
        const price = parseInt(parts[1]);
        // console.log(phone)
        const phoneInfo={
name:phone.phone_name,
price:price
        }
        return phoneInfo
    })
    setPhones(phonesData)
   
})
    },[])
    // console.log(phones)
    return (
        <div  className='mt-10 bg-slate-200'>
                {/* <ResponsiveContainer width="100%" height="100%">
                <BarChart width={1000} height={500} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name" ></XAxis>
          <YAxis/>
          <Tooltip/>
        </BarChart>
      </ResponsiveContainer> */}
      <div style={{width:'65%'}} className="mx-auto">
      <BarChart width={1000} height={500} data={phones}>
          <Bar dataKey="price" fill="#8884d8" />
          <XAxis dataKey="name" ></XAxis>
          <YAxis/>
          <Tooltip/>
        </BarChart>
      </div>
      
     
        </div>
    );
};

export default Phone;