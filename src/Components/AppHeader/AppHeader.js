import React, { useState } from 'react'
import agrisk_logo from "../../assets/global_agrisk_logo.jpg";
import parametrics_logo from "../../assets/parametrics_logo.png";


const AppHeader = () => {

  const [userName, setUserName] = useState('Mikael')

  return (
    <div className="navbar">
      <div className="left">
        <img className='logo1'
            src={agrisk_logo}    
            alt="Agrisk Logo"
          />

        <img className='logo2'
            src={parametrics_logo}
            alt="Parametrics Logo"

          />      
      </div>
      <div className="right">
      
        <div className="user">
          <span>{"Welcome "}{userName}</span>          
        </div>
        <button>{"LOG OUT"}</button>
      </div>
  </div>
  )
}

export default AppHeader