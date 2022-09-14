import { useEffect, useState } from "react";

const Clock = () => {
    const [hour,setHour]=useState(0)
    const [minute,setMinute]=useState(0)
    const [second,setSecond]=useState(0)
    const [day,setDay]=useState(0)
    const [pm,setPm]=useState(false)
    const days=['SUN','MON','TUE','WED','THU','FRI','SAT']
    useEffect(()=>{
        const update = () => {
            const date = new Date();
            let hour = date.getHours();
            hour = (hour % 12) || 12;
            setHour(hour);
            setMinute(date.getMinutes());
            setSecond(date.getSeconds());
            setDay(date.getDay());
            setPm(date.getHours() >= 12);
        }
        update()
        const interval=setInterval(()=>{
            update()
        },1000)
        return ()=>clearInterval(interval)
    },[])
    return ( <>
    {`${hour<10?'0'+hour:hour}`}:
    {`${minute<10?'0'+minute:minute}`}:
    {`${second<10?'0'+second:second}`}
    {` ${pm?'PM':'AM'}`}
    {` ${days[day]}`}
    </> );
}
 
export default Clock;