import React, { useState } from 'react'
import './ContactForm.css'
import emailJs from '@emailjs/browser'

const ContactForm = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e){
    e.preventDefault();

    if(firstname === "" || lastname === "" || email === "" || message === ""){
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: `${firstname} ${lastname}`,
      message: message,
      email: email
    }

    emailJs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, templateParams, import.meta.env.VITE_PUBLIC_KEY)

    .then((response) => {
      console.log("Email enviado", response.status, response.text)
      setFirstname("")
      setLastname("")
      setEmail("")
      setMessage("")
    }, (err) => {
      console.log(err)
    })
  }

  return (
    <div className="contact-form-content">
      <form className='form' onSubmit={sendEmail}>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder='Nome'
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname} />
          <input
            type="text"
            name="lastname"
            placeholder='Sobrenome'
            onChange={(e) => setLastname(e.target.value)}
            value={lastname} />
        </div>
        <input
          type="text"
          name="email"
          placeholder='Email'
          onChange={(e) => setEmail(e.target.value)}
          value={email} />
        <textarea
          type="text"
          name="message"
          rows={3}
          onChange={(e) => setMessage(e.target.value)}
          value={message} />

        <input className='form-button' type='submit' value="Enviar"></input>
      </form>
    </div>
  )
}

export default ContactForm