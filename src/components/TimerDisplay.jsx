import { useState,useEffect } from 'react';
import './TimerDisplay.css';
export default function Timer(){

    const [timeleft,setTimeLeft] = useState(1500);
    const [isRunning,setIsRunning] = useState(false);

    function getFormattedTime(time){
        const mins = Math.floor(time / 60);
        const seconds = time % 60;
        const format = mins + " : " + seconds.toString().padStart(2,"0");
        return format;
    }
    useEffect(() =>{
        if (!isRunning) return;
        const id = setInterval(()=>{
            setTimeLeft((prev) => {if (prev == 0){
                return 0;
            }
        else{
            return prev - 1;
        }})
            
        },1000)
        return () => clearInterval(id);
    }
        ,[isRunning]);

    useEffect(() => {
    if (timeleft === 0) {
        setIsRunning(false);
    }
}, [timeleft]);
    return(
        <div className='timer-card'>
        <h2 className='heading'>Pomodorro</h2>
        <p className='time'>{getFormattedTime(timeleft)}</p>
        <div className='btn'>
        <button className="start-btn"onClick={()=>setIsRunning((isRunning)=> !isRunning)}>
            {isRunning? "Stop" : "Start"}
        </button>

        <button className="reset-btn"onClick={()=>{
        setTimeLeft((prev) =>  1500);
        setIsRunning(false);
        }}>
            Reset
        </button>
        </div>
        </div>
    )
}