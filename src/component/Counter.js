import React, { useState } from 'react';
import CounterController from './CounterController';
import LogStash from './LogStash';
import LogStashClass from './LogStashClass';

const Counter = () => {
  const [logs, setLogs] = useState([]);
  const [showLog, setShowLog] = useState(true);

  const onReduceClick = (currentValue) => {
    setLogs((prevState) => [...prevState, `Reduce clicked. Current value: ${currentValue}`]);
  };

  const onAddClick = (currentValue) => {
    setLogs((prevState) => [...prevState, `Add clicked. Current value: ${currentValue}`]);
  };

  const onToggleLog = () => {
    setShowLog((prevState) => !prevState);
  };

  return (
    <>
      <div className="counter">
        <h1 className="title">Counter App</h1>

        <CounterController onReduceClick={onReduceClick} onAddCLick={onAddClick} />
      </div>

      {showLog && <LogStashClass logs={logs} />}

      <button onClick={onToggleLog}>Toggle LogStash</button>
    </>
  );
};

export default Counter;
