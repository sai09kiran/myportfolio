import React from 'react'

import "../Mobilenav/Mobilenav.css"

const Mobilenav = ({isOpen ,togglemenu}) => {
  return (
    <div
    className={`mobilemenu ${isOpen? "Active" : ""}`}
    onClick={togglemenu}
    >

    <div className='mobilemenu'  >

    <ul>
    <li>
   <a className="menumoblie">Home</a>
   </li>

   <li>
   <a className="menumoblie">Skills</a>
   </li>

   <li>
   <a className="menumoblie">Work Experience</a>
   </li>

   <li>
   <a className="menumoblie">Contactme</a>
   </li>


   <button className="contact" onClick={()=> {} }>
    Hire me</button>

</ul>


    </div>






    </div>
  )
}

export default Mobilenav