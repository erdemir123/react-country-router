import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import imagegif from "../image/image.gif"

const Home = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState([]);
  const [loading,setLoading]=useState(true)
  console.log(loading)
  useEffect(() => {
    const url = "https://restcountries.com/v3.1/all";
    fetch(url)
      .then((res) => res.json())
      .then((res) => setCountry(res))
      .catch((err) => console.log(err));
    
    setTimeout(()=>{
    setLoading(!loading)},1000
    )
  }, []);
  return (
    <div>
      { loading ? <img src={imagegif} /> :
      (
        country.map((item, index) => {
          return (
            <div key={index} onClick={() => {navigate(`${item.name.common}`,{state:item})}} type="button" >
              <div >{item.name.common}</div>
              <img src={item.flags.png} alt="" />
            </div>
          );
        })
      )
      }
    </div>
  );
};

export default Home;
