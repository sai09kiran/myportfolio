import React, { useState } from 'react'

import "../Skills/Skills.css"

import Skilscard from './Skilscard/Skilscard'
import { SKILLS } from '../../utils/Data'
import Skilsinfo from './Skilsinfocard/Skilsinfo'

const Skils = ({data}) => {

const [selectedskill, setSeletedskill]=useState(SKILLS[0]);
const handleSelectSkill=(data)=>{
  setSeletedskill(data);
}


  return (
    <>
    
    <section className='skilscontainer'>
      <h4>Technicals Proficiency</h4>

      <div className="skilscontent">
        <div className="skils">
          {SKILLS.map((item)=>(
            <Skilscard 
            key={item.title}
            icounUrl={item.icon}
            title={item.title}
            isActive={selectedskill.title === item.title}
            onClick={()=>{
              handleSelectSkill(item);
            }}
            />
  
          ))}
        </div>
       
        <div className="skilsinfo">
          <Skilsinfo 
          heading={selectedskill.title}
          skill={selectedskill.skills}
          />
           </div>

      </div>

    </section>
    
    </>
  )
}

export default Skils