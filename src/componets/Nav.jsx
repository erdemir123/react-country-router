import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {
    const navigate = useNavigate()
  return (
    <div className='flex justify-between px-10 bg-slate-500 text-lg font-bold py-5'>
        <p onClick={()=>navigate("/")}>COUNTRİES</p>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav