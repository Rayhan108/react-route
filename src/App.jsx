import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Link from './components/Link/Link'
import { Bars3Icon ,XMarkIcon} from '@heroicons/react/24/solid'
import PriceCard from './components/Card/PriceCard'

function App() {
const [routes,setRoutes]=useState([])
const [open,setOpen] =useState([false])
useEffect(()=>{
  fetch('nav.json').then(res => res.json()).then(data=>setRoutes(data))
},[])
// console.log(routes)
  return (
<>
    <nav className='bg-purple-300 md:p-3'>
      <div onClick={()=>setOpen(!open)} className='md:hidden'>
        <span>{open? <XMarkIcon className="h-6 w-6 text-purple-800" />  : <Bars3Icon className="h-6 w-6 text-purple-800" />  }</span>
   
      </div>
    <div className={` md:static md:flex absolute  duration-500 ${open?'top-6':'-top-48'}`} >
    {
        routes.map(route=><Link key={route.id} route={route}></Link>)
      }
    </div>
    </nav>
  <PriceCard></PriceCard>
    </>


  )
}

export default App
