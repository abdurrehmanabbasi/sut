import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const CConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [c1,setC1]=useState('Choose Currency');
  const [c2,setC2]=useState('');
  useEffect(() => {
    const options = {
        method: "GET",
        url: "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json",
      };
    const getFromApi = () => {
      axios
        .request(options)
        .then(function (response) {
          const data = response.data;
          setCurrencies(Object.entries(data));
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    getFromApi();
  }, []);

  console.log(currencies)
  return <div className="mt-8 flex flex-col ">
    
  <select value={c1} onChange={(e)=>setC1(e.target.value)} id="" className="text-black rounded-2xl text-2xl">

    <option value="0" >Choose Currency</option>
  {currencies.map((c,i)=>{
    return <option value={c[0]} key={i} >{c[0]} - {c[1]}</option>
  })}
</select>
  </div>;
};

export default CConverter;
