import {useState} from "react"
import './App.css';
import './index.css'
import Timer from "./components/TimerDisplay";
function App(){
  return (
    <div className="bg">
      <Timer />
    </div>
  )
}
export default App;