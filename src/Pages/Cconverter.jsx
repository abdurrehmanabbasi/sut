import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const CConverter = () => {
  const [currencies, setCurrencies] = useState([]);
  const [c1, setC1] = useState({
    cur:'usd',
    amount:0
  });
  const [c2, setC2] = useState({
    cur:'pkr',
    amount:0
  });
  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json",
    };
    const getCurrencies = () => {
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
    getCurrencies();
  }, []);
  useEffect(()=>{
    const options ={
      method:"GET",
      url:`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${c1.cur}/${c2.cur}.json`
    }
    const getResult = ()=>{
      axios.request(options)
      .then(function (res) {
        const data= res.data
        setC2({...c2,amount:c1.amount*Object.entries(data)[1][1]})
      }).catch(function (e) {
        console.error(e)
      })
    }
    getResult()
  },[c1,c2.cur])
  console.log("Render")
  return (
    <div className="mt-8 flex flex-col ">

      <div className="text-black flex ">
        <input type="text" value={c1.amount} className={"flex-1"} onChange={(e)=> setC1({...c1,amount: Number(e.target.value)})}/>
      <select

        onChange={(e) => setC1({...c1,cur:e.target.value})}
        value={c1.cur}
        className="text-2xl"
      >
        <option value="0">Choose Currency</option>
        {currencies.map((c, i) => {
          return (
            <option value={c[0]} key={i}>
              {c[0]} - {c[1]}
            </option>
          );
        })}
      </select>
      </div>


      <div className="text-black flex">
        <input type="text" disabled value={c2.amount} className={"flex-1"} onChange={(e)=> setC2({...c2,amount: Number(e.target.value)})}/>
      <select
        value={c2.cur}
        onChange={(e) => setC2({...c2,cur:e.target.value})}
        className="text-black rounded-2xl text-2xl"
      >
        <option value="0">Choose Currency</option>
        {currencies.map((c, i) => {
          return (
            <option value={c[0]} key={i}>
              {c[0]} - {c[1]}
            </option>
          );
        })}
      </select>
      </div>
    </div>
  );
};

export default CConverter;
