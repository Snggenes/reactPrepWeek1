import React from 'react'
import Button from './Button.jsx'

export default function Count({count, setCount}) {

  function increment() {
    setCount(prev => prev + 1)
  }
  function decrement(){
    setCount(prev => prev - 1)
  }
  function incrementTwo() {
    setCount(prev => prev + 1)
    setCount(prev => prev + 1)
  }

  return (
    <Button increment={increment} decrement={decrement} incrementTwo={incrementTwo}/>
  )
}
