import React from 'react'

import "../Skilscard/Skilscard.css"

const Skilscard = ({title, iconUrl, isActive, onClick}) => {
  return (
    <div className={`Skilscard ${isActive ? "active" : ""}`}
     onClick={()=> onClick()}
    >
    
    <div className="skilscard">
        <img src={iconUrl} alt={title} />
    </div>

<span>{title}</span>









    </div>
  )
}

export default Skilscard