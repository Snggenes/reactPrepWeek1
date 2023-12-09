import React from 'react'


export default function Button({increment, decrement, incrementTwo}) {
  return (
    <>
      <button onClick={increment}>+ One</button>
      <button onClick={decrement}>- One</button>
      <button onClick={incrementTwo}>+ Two</button>
    
    </>

  )
}

