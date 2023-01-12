import React, { useState, useEffect } from 'react';

const Clockf = () => {

  const personainicial = {
    fecha: new Date(),
    edad: 0,
    nombre: 'Martín',
    apellidos: 'San José'
  }

  const [persona, setPersona] = useState(personainicial);

  function tick(){
   
    setPersona((prevState) => {
      let edad = prevState.edad +1;
      return {
         ...prevState,
         fecha: new Date(),
         edad
      }
    });

  };


  useEffect(()=>{
    const timerID = setInterval (
      () => tick(), 1000
   );
   
   return () => {
    clearInterval(timerID);
  }

  },[]);

  return (
    <div>
         <h2>
         Hora Actual:
         {persona.fecha.toLocaleTimeString()}
         </h2>
         <h3>{persona.nombre} {persona.apellidos}</h3>
         <h1>Edad: {persona.edad}</h1>
    </div>
  );
}

export default Clockf;
