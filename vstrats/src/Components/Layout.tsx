import React from 'react'
import viperBc from "../Assest/viper_bc.png";
function Background({children}) {
  return (
    <div className="wrapper">
        <img src={viperBc} alt="" />

        {children}
    </div>
  )
}

export default Background