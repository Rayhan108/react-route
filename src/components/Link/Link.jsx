import React from 'react';


const Link = ({route}) => {
    // console.log(route)
    return (
        <div>
                  
           <ul>
          <li className='mr-12 text-purple-700 bg-purple-300 py-2  font-bold hover:bg-purple-400 '>
            <a href={route.path}>{route.name}</a>
          </li>
           </ul>
        </div>
    );
};

export default Link;