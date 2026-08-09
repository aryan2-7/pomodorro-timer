import {useState,useEffect } from "react";
import './TimerDisplay.css'

export default function Timer({time,title}){

    const [timeleft,setTimeleft] = useState(time);
    const [isRunning,setIsRunning] = useState(false);

    useEffect(()=>{
        if (!isRunning) return;
        const timeInterval = setInterval(()=>{
            setTimeleft((prev) => prev-1);
        },1000)

        return () => clearInterval(timeInterval)

    },[isRunning]);

    function getFormattedTime(unformattedtime){
        const min = Math.floor(unformattedtime / 60);
        const sec = unformattedtime % 60;
        const FormattedTime = min.toString() + " : " + sec.toString().padStart(2,"0");
        return FormattedTime;
    }

    useEffect(() => {
        if(timeleft == 0){
            setIsRunning((prev) => (false))
        }
    },[timeleft]);

    return(
        <div className="timer-card">
            <h2>{title}</h2>
            <p>{getFormattedTime(timeleft)}</p>
            <div className="main-btns">
                <button className="start-btn" onClick={()=> {setIsRunning((prev)=> (!prev))}}>
                    {isRunning?"Stop": "Start"}
                </button>
                <button className="reset-btn" onClick={()=>{
                    setTimeleft((prev) => time);
                    setIsRunning(false);
                }}>
                Reset
                </button>
            </div>
        
        </div>
    )

}