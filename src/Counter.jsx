import React, { useEffect, useState } from 'react'

function Counter() {
    const [Count,setCount]= useState(0);
    useEffect(()=>{ const time = setInterval(()=>{
        setCount((Count)=>Count+1);
    },2000);
    return()=> clearInterval(time)
});
function reset(){
    setCount(0);
}

  return (
    <div>
        <h4 className='text-primary'>Count : <h1 style={{fontWeight:'bold', fontSize:'60px', margin:'20px'}}>{Count}</h1> Seconds</h4>
        <button style={{borderRadius:'20px'}} className='m-4 fs-5' onClick={reset}>Reset</button>

    </div>
  )
}

export default Counter