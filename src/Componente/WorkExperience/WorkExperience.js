import React, { useRef } from 'react'
import"../WorkExperience/WorkExperience.css"
import Slider from "react-slick"
import Experiencecard from './Experiencecard/Experiencecard'
import { Work_Experience } from '../../utils/Data'



const WorkExperience = () => {
  const sliderRef= useRef ();
  const setting={
    dots:false,
    infinitie: true,
    speed:500,
    slidesToShow:2,
    slidesToScroll:1,
    arrow:false,
    responsive:[

      {
        breakpoint:769,
        setting:{
       slidesToShow:1,
       slidesToScroll:1,
        },
      },
    ],

  }

  return (
   <section className='experience-container'>
  <h4>Work Experience</h4>

  <div className="experience-content"> 
  {/* <div className="arrow-right">
    <span className=' material-symbols-outlined'> chevron_right</span>
  </div>

  <div className="arrow-left">
    <span className=' material-symbols-outlined'> chevron_left</span>
  </div>
   */}
  <Slider ref={sliderRef} {...setting}>
{Work_Experience.map((item)=>(
    <Experiencecard key={item.title} details={item}/>
))}

</Slider>

</div>

   </section>
  )
}

export default WorkExperience