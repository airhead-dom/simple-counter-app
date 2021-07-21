import React, { useState } from 'react';

const CounterController = ({
                             onReduceClick = () => {
                             }, onAddCLick = () => {
  }
                           }) => {
  const [count, setCount] = useState(0);
  
  const onReduce = () => {
    setCount(prevState => {
      if (prevState === 0)
        return prevState;
      
      return prevState - 1;
    });
    
    onReduceClick(count > 0 ? count - 1 : count);
  };
  
  const onAdd = () => {
    setCount(prevState => prevState + 1);
    onAddCLick(count + 1);
  };
  
  return (
      <div className="counter-controller">
        <button className="counter-btn" onClick={onReduce}>-</button>
        <p className="counter-count">{count}</p>
        <button className="counter-btn" onClick={onAdd}>+</button>
      </div>
  );
};

export default CounterController;
