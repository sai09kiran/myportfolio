import React from 'react'

import "../ContactForm/ContactForm.css"

const ContactForm = () => {
  return (
    <div className="contact-form-content">
       <form>
       <div className="name-container">
           <input type="text"name='firstname'placeholder='firstname' /> 
           <input type="text"name='lastname'placeholder='lastname' />
            </div>
            <input type="text"email='email'placeholder='email' />
            <textarea type="text"name='message'placeholder='massage'rows={3}/>
            <button>Send</button>
       </form>

    </div>
  )
}

export default ContactForm