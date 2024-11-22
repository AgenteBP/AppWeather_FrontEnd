import React from 'react'

export const BottonConsult = ({getWeather}) => {
  return (
    <>
          <button className="btn btn-primary" onClick={getWeather}>Consultar</button>
    </>

  )
}
