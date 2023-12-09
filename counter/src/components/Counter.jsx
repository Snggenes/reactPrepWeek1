import React, { useState } from 'react'
import Count from './Count.jsx';

export default function Counter() {

    const [count, setCount] = useState(0);
    if(count < 0){
      setCount(0)
    }

    let countMessage;
    if(count < 10){
        countMessage = 'keep counting'
    }else{
        countMessage = 'higher than 10'
    }

  return (
    <>
        <h2>{count}</h2>
        <Count count={count} setCount={setCount} />
        <h2>{countMessage}</h2>
    </>
  )
}
