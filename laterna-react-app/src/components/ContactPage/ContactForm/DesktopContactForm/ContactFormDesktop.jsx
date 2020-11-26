import React, { useState } from 'react';
import Input from '../../../Elements/Input';
import '../ContactForm.scss';
import sendBtnImg from '../../images/Group 397.png';
import emailjs from 'emailjs-com';

const ContactFormDesktop = () => {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [title, setTitle] = useState('');

  const [message, setMessage] = useState('');

  let [isChecked, setIsChecked] = useState(false);

  const handleInputNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleInputEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const handleInputTitleChange = (e) => {
    e.preventDefault();
    setTitle(e.target.value);
  }

  const handleInputMessageChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  }

  const handleCheckboxChange = (e) => {
    isChecked = e.target.checked;
    setIsChecked(isChecked);
  }

  const validation = () => {
    const nameRegex = /^[a-zA-Ząśćźżóę ]{2,30}$/;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (isChecked && nameRegex.test(name) && emailRegex.test(email) && title && message.length <= 500 && message.length >= 5) {
      return true;
    } else {
      alert('Wypełnij poprawnie wszystkie pola i zaakceptuj politykę prywatności.')
      return false;
    }
  }

  const sendMessage = (e) => {
    e.preventDefault();
    if (validation()) {
      const templateParams = {
        from_name: name,
        title: title,
        sender_email_address: email,
        message: message
      }
      emailjs
        .send('service_5qrx1m2', 'template_pjyl7xo', templateParams, 'user_YfPAn01Z0q698Aq2evdOh')
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('Wiadomość została wysłana. Dziękujemy za kontakt z nami. :)')
        }, function (error) {
          console.log('FAILED...', error);
        });

      setName("");
      setEmail("");
      setTitle("");
      setMessage("");
      setIsChecked(false);
    }
  }

  return (
    <>
      <h2 className="ContactForm--header">FORMULARZ KONTAKTOWY</h2>
      <form className="ContactForm--form">
        <div className="ContactForm--name-wrapper">
          <Input type="text" label="Imię i nazwisko" value={name} onChange={handleInputNameChange} />
          <Input type="text" label="Adres e-mail" value={email} onChange={handleInputEmailChange} />
        </div>
        <Input type="text" label="Tytuł wiadomości" labelStyle={{ marginTop: 16 }} value={title} onChange={handleInputTitleChange} />
        <label style={{ marginTop: 16 }}>Treść wiadomości</label>
        <textarea type="text" label="Treść wiadomości" value={message} onChange={handleInputMessageChange} />
        <div className='ContactForm--form--checkbox'>
          <Input type="checkbox" onChange={handleCheckboxChange} checked={isChecked} />
          <label htmlFor="checkbox">Akceptuję <a href="/polityka-prywatnosci" target="_blank">Politykę Prywatności</a> Projektu Laterna</label>
        </div>
      </form>
      <button id="sendBtn" onClick={sendMessage}>
        <img src={sendBtnImg} alt="Przycisk Wyślij" />
      </button>
    </>
  )
}

export default ContactFormDesktop;