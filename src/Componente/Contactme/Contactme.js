import React from 'react'

import "../Contactme/Contactme.css"
import ContactCard from './Contact Card/ContactCard'

import img from "../Assets/email2.png"
import img2 from "../Assets/git3.png"
import ContactForm from './ContactForm/ContactForm'

const Contactme = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex:1}}>
                <ContactCard 
                iconUrl={img}
                text="saikiran.careerpedia@gmail.com"
                />

               <ContactCard 
                iconUrl={img2}
                text="https://github.com/sai09kiran"
                />
            </div>
            <div style={{flex:1}}>
                <ContactForm/>
            </div>

        </div>
    </section>
  )
}

export default Contactme