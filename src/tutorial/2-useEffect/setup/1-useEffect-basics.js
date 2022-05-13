import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
// no se puede usar hooks dentro de condicionales (como useEffect dentro de un if)
// se puede solucionar usando un if dentro de useEffect
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    console.log('call useEffect');
    if(value >= 1){
      document.title = `New Messages(${value}))`;
      
    }
  });
  // console.log('render component') este se ve primero que call useEffect
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
