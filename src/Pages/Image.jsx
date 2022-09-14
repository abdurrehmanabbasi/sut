import { useState } from "react";

const Image= () => {
    const [url,setUrl]=useState('')
    const [prop,setProp]=useState({
        blur:0,
        brightness:100,
        contrast:100
    })
    return ( 
        <div className="flex flex-col mt-10 text-black">
        <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)} placeholder="http:// or https://" className="p-2 rounded-md" />
        <img src={url} alt="" style={{filter:`blur(${prop.blur}px) brightness(${prop.brightness}%) contrast(${prop.contrast}%)`}} />
        {url?
        <div className="flex flex-col">
        Blur : <input type="range" min={0} max={5} value={prop.blur} onInput={(e)=>setProp(prop=>({...prop,blur:e.target.value}))} />
        Brightness : <input type="range" min={0} max={200} value={prop.brightness} onInput={(e)=>setProp(prop=>({...prop,brightness:e.target.value}))} />
        Contrast : <input type="range" min={0} max={200} value={prop.contrast} onInput={(e)=>setProp(prop=>({...prop,contrast:e.target.value}))} />
        </div>
        :''    
        }
        
        </div>
     );
}
 
export default Image;