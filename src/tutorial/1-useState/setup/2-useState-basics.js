import React, { useState } from 'react';
import reactRouterDom from 'react-router-dom';
// use (este tipo de hook siempre empezará con use)
// component name must be uppercase
// must be in the function/component body (si está afuera del componente no funcionará)
// cannot call conditionally (dentro de ifs no funciona)

const UseStateBasics = () => {
  //console.log(useState())//[undefined, f] undefined es un valor default que se le pasa
  // const value = useState(1)[0]
  // const handler = useState(1)[1];
  // console.log(value, handler) //1 f
  const [text, setText] = useState('random title'); //text y setText es convencional (apple setApple y así)
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello worold');
    } else {
      setText('random title');
    }
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
