import { useEffect } from "react";
import { useState } from "react";
import { Helmet } from "react-helmet";

const Stopwatch = () => {
    const [start,setStart]=useState(false);
    const [time,setTime]=useState(0)
    useEffect(()=>{
        let interval;
        if(start){
            interval=setInterval(()=>
            setTime((time)=>time+10),10)
        }else{
            clearInterval(interval)
        }
        return ()=>{
            clearInterval(interval)
        }
    },[start])
    function handleStart(){
        setStart(true)
    }
    function handlePause(){
        setStart(false)
    }
    function handleReset() {
        setStart(false)
        setTime(0)
    }
    return ( <>
    <Helmet>
        <title>Stopwatch</title>
    </Helmet>

    <div className="flex flex-col justify-center items-center">
        <div className="mt-10 bg-slate-600 p-10 rounded-full text-white text-9xl">
            <span>  {( "0"+ Math.floor((time/60000) %60 )).slice(-2) }</span> :
            <span>  {( "0"+ Math.floor((time/1000) %60 )).slice(-2) }</span> :
            <span> {( "0"+ ((time/10) %100 )).slice(-2) }</span>
        </div>
        <div className="mt-10 text-2xl ">
        <button onClick={start?handlePause:handleStart} className={`bg-green-500 text-white p-10 rounded-full`} >{start?'Pause':'Start'}</button>
        <button onClick={handleReset} className={`bg-red-500 text-white rounded-full p-10`}>Reset</button>
        </div>

    </div>
    </> );
}
 
export default Stopwatch;