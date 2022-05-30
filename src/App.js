import React from "react";
import Timer from './Timer';
import TimerFunction from './TimerFunction';

function App() {
  return (
    <div className="App">
      <Timer value={0} />
      <TimerFunction value={0} />
    </div>
  )
}

export default App;