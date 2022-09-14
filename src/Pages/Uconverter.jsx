import { useState } from "react";
import hconvert from '../convert.js'
import convert from "convert-units";

const Uhconverter = () => {
 const [option,setOption]=useState(false)
  const [from,setFrom]=useState('');
  const [to,setTo]=useState('')
  const [number,setNumber]=useState(0)
  const list=["mass","length","digital"];
  const [ans,setAns]=useState(0)
  function handleOption(e) {
    setOption(e.target.value)
  }
  function handleFrom(e) {
    setFrom(e.target.value)
  }
  function handleTo(e) {
    setTo(e.target.value)
  }
  function handleNumber(e) {
    setNumber(e.target.value)
    setAns(convert(number).from(from).to(to))
  }
  return (

    <div className="flex flex-col text-black">
      Select type of measurment
      <select value={option} onChange={handleOption}>
        <option value='label' >Choose type</option>
        {list.map((l,i)=>(
          <option value={l} key={i}>{l.toUpperCase()}</option>
        ))}
      </select>
      <input type="number" value={number} onChange={(e)=>handleNumber(e)}/>
      From
      {!option?'':
      <select value={from} onChange={handleFrom}>
      {hconvert.possibilities(option).map((l,i)=>(
          <option value={hconvert.describe(l).abbr} key={i}>{hconvert.describe(l).singular}</option>
        ))}
      </select>}
      To
      {!option?'':
      <select value={to} onChange={handleTo}>
      {hconvert.possibilities(option).map((l,i)=>(
          <option value={hconvert.describe(l).abbr} key={i}>{hconvert.describe(l).singular}</option>
        ))}
      </select>}
      <div>{ans}</div>
    </div>
  );
};

export default Uhconverter;
