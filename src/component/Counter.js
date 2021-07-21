import React, { useState } from 'react';
import CounterController from "./CounterController";
import LogStash from "./LogStash";


const Counter = () => {
  const [logs, setLogs] = useState([]);
  
  const onReduceClick = (currentValue) => {
    setLogs(prevState => [...prevState, `Reduce clicked. Current value: ${currentValue}`]);
  };
  
  const onAddClick = (currentValue) => {
    setLogs(prevState => [...prevState, `Add clicked. Current value: ${currentValue}`]);
  };
  
  return (
      <>
        <div className="counter">
          <h1 className="title">Counter App</h1>
          
          <CounterController onReduceClick={onReduceClick} onAddCLick={onAddClick} />
        </div>
        <LogStash logs={logs} />
      </>
  );
};

export default Counter;
