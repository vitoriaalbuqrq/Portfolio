import React, { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailJs from '@emailjs/browser'

import './ContactForm.css'

const ContactForm = () => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [emailValid, setEmailValid] = useState(true);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleEmailBlur = () => {
    const valid = validateEmail(email);
    setEmailValid(valid);
    if (!valid) {
      setEmailError('Email inválido');
    } else {
      setEmailError('');
    }
  };

  function sendEmail(e){
    e.preventDefault();

    if (firstname === "" || lastname === "" || email === "" || message === "") {
      toast.error("Preencha todos os campos");
      return;
    }

    if (!emailValid) {
      setEmailError('Email inválido.');
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
      toast.success("Email enviado com sucesso!");
      setFirstname("")
      setLastname("")
      setEmail("")
      setMessage("")
    }, (err) => {
      console.error("Erro ao enviar email:", err);
      toast.error("Erro ao enviar email.");
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
          onChange={handleEmailChange} 
          onBlur={handleEmailBlur}
          value={email} 
          className={emailError ? 'invalid-email' : ''}
          />
          {emailError && <p className="error-message">{emailError}</p>}
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