import React from "react";


import { useNavigate, useParams, useLocation } from "react-router-dom";

const CountryDetails = () => {
    const navigate = useNavigate()
  const { state } = useLocation();
console.log(state.flag);
  return (
    <div>
        <div >{state.flag}</div>
        <img src={state.flags.png} alt="" srcset="" />
        <button onClick={(()=>navigate("/"))}>go b</button>
    </div>
  );
};

export default CountryDetails;
