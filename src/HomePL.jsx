import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



export default function HomePL() {
  const navigate = useNavigate()
  
  const onButtonClick = () => {
    navigate("/")
  }

  return (
    <div className='Page'>
      <header>
        <h1>HeAd</h1>
      </header>
      <div>
        Siema!
      </div>
      <div>To jest strona domowa,coś tu jest.</div>
        <input className='Button'
          type="button"
          value={"EN"}
          onClick={onButtonClick}
        />
    </div>
  )
}
