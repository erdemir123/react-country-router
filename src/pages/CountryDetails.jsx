import React from 'react'
import {  useLocation, useNavigate, useParams } from 'react-router-dom'


const CountryDetails = () => {
    const navigate = useNavigate()
    const {state}=useLocation()
    const {country}= useParams()
    // console.log(state);
    console.log(country)
  return (
    <div className="flex flex-col items-center bg-slate-300 h-[84vh]">
        <div className="text-center font-bold text-2xl text-slate-500 mt-20">{state.name.common}</div>
        <img src={state.flags.png} alt="" className="w-[400px]"/>
        <div className="text-center font-bold text-2xl text-slate-500" >{state.capital}</div>
        <button className='bg-slate-500 py-1 px-2 rounded-md text-lg font-bold text-slate-300' onClick={()=>navigate("/")}>Go Home</button>
    </div>
  )
}

export default CountryDetails