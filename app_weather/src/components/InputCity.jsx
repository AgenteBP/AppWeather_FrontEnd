import React from 'react'

export const InputCity = ({city, setCity }) => {
  return (
    <>
      <input className='btn btn-white' 
      type='text' 
      placeholder='Ingrese el nombre de la ciudad' 
      value={city} 
      onChange={(e) => setCity(e.target.value)}>
      </input>
    </>
    
  );
}
