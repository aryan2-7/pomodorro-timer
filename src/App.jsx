import {useState} from "react"
import './App.css';
import './index.css'
import Timer from "./components/TimerDisplay";
function App(){

  const [timer,setTimer] = useState("Pomodorro");

  return (
    <div className="all-timer">

      <div className="timer-selector">
        <button className={timer === "Pomodorro"?"selected":"unselected"} onClick={()=> setTimer("Pomodorro")}>Pomdorro</button>
        <button className={timer === "Short Break"?"selected":"unselected"} onClick={()=> setTimer("Short Break")}>Short Break</button>
        <button className={timer === "Long Break"?"selected":"unselected"}onClick={()=> setTimer("Long Break")}>Long Break</button>
      </div>

      { timer === "Pomodorro" && <Timer time={1500} title={"Pomodorro"}/>}
      { timer === "Short Break" && <Timer time={300} title={"Short Break"}/>}
      { timer === "Long Break" && <Timer time={600} title={"Long Break"}/>}

    </div>
  )
}
export default App;