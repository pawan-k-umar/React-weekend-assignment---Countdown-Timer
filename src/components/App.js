import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  // write your code here 
  const [time, setTime] = useState(0);

  useEffect(()=>{
    const temp =setTimeout(()=>{
      time > 0 && setTime (time-1);
    },1000)

    return ()=>{
      clearTimeout(temp);
    }
  },[time]);

  const fun = (e) =>{
    if(e.key==='Enter'){
      if(!isNaN(e.target.value))
        setTime(Math.floor(e.target.value));
      else
        setTime(0);
    }
  }
  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for<input id="timeCount" onKeyDown={fun /* callback function */} /> sec.
        </h1>
      </div>
      <div id="current-time">{time/* remaining time */}</div>
    </div>
  )
}


export default App;
