import React from 'react'

import "../Skilsinfocard/Skilsinfo.css"



const Skilsinfo = ({heading ,skill}) => {
  return  <div className='skillsinfocard'>
    <h6>{heading}</h6>

   <div className="skilsinfocontent">

   {skill.map((item , index) => (

     <React.Fragment key={`skill ${index}`}>

       <div className="skillinfo">

        <p>{item.skill}</p>
        <p className='pecentage'>{item.percentage}</p>

       </div>

       <div className="skillprogress-bg">
        <div className='skillprogess' style={{width: item.percentage}}></div>
       </div>
       


     </React.Fragment>



   ))}




   </div>








  </div>
  
}

export default Skilsinfo