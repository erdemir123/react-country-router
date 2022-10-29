import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from "../asset/loading.gif"


const Home = () => {
    const navigate = useNavigate()
    const [loading,setLoading]=useState(true)
    const [country,setCountry]=useState([])
    const url ="https://restcountries.com/v3.1/all"
useEffect(()=>{
const sadık = async ()=>{
    const {data} = await axios(url) 
    setCountry(data)
    setInterval(()=>{
        setLoading(false)
    },2000)
}
sadık()
},[])
console.log(country)
if(loading){
    return <img src={Loading} alt="" className='w-[200px]  mx-auto mt-[200px]' />
}
  return (
    <div>
        {country.map((item)=>{
            return(
                <div className='flex justify-between border-2 items-center px-5 border-slate-500 mb-2 py-2 bg-slate-200 text-slate-600' onClick={()=>{navigate(`${item.name.common}`,{state:item})}}>
                    <div >{item.name.common}</div>
                    <img src={item.flags.png} alt="" className='w-10 h-10'/>
                </div>
                
            )
        })}

    </div>
  )
}

export default Home