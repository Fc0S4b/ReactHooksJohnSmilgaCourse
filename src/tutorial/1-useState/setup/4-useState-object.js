import React, { useState } from 'react';

// object example
// const UseStateObject = () => {
//   const [person, setPerson] = useState({
//     name: 'peter',
//     age: 24,
//     message: 'random message',
//   });
//   console.log(person);
//   const changeMessage = () => {
//     // setPerson('hello world'); al ejececutar la función se borran los h3, para poder cambiar solo una parte del objeto se puede usar el spread operator para así mantener a person y solo cambiar el message
//     setPerson({ ...person, message: 'hello world' });
//   };
//   return (
//     <>
//       <h3>{person.name}</h3>
//       <h3>{person.age}</h3>
//       <h3>{person.message}</h3>
//       <button className="btn" onClick={changeMessage}>
//         change message
//       </button>
//     </>
//   );
// };

// export default UseStateObject;

// multiple state values
const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });

  // no hay regla para setear el número de estados que se requiera
  const [name, setName] = useState('peter');
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState('random message');

  const changeMessage = () => {
    // setPerson({ ...person, message: 'hello world' });
    setMessage('hello world');
  };
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;
