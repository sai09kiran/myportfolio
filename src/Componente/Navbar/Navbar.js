import "../Navbar/Navbar.css"


import { useState } from "react"
import Mobilenav from "../Mobilenav/Mobilenav";



const Navbar = () => {

const [openmenu,setOpenmenu]= useState(false);

const togglemenu= ()=>{
  setOpenmenu(!openmenu);
};


  return (
    <>

{/* <Mobilenav className='mobilenav' isOpen={openmenu} togglemenu={togglemenu}/> */}
    
    <div className="nav">
        <div className="wrapper">
          <h2>SaiKiran</h2>
                     


<ul>
    <li>
   <a className="menu">Home</a>
   </li>

   <li>
   <a className="menu">Skills</a>
   </li>

   <li>
   <a className="menu">Work Experience</a>
   </li>

   <li>
   <a className="menu">Contactme</a>
   </li>

   <button className="contact" onClick={()=> {} }>
    Hire me</button>


</ul>

<button className="btn" onClick= {togglemenu}>
  <span 
  class={"material-symbols-outlined"}
   style={{fontSize:"1.8rem"}}
  >
   {openmenu ? "close" : "menu"}
  </span>
</button>
            
        </div>
    </div>

    
    
    
    </>
  )
}

export default Navbar