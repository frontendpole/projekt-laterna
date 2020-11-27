import React from 'react';
import useLayoutQueries from '../../../functions/useLayoutQueries';
import './PassportGetInfo.scss';
import Input from '../../Elements/Input';
import sendBtnImg from '../images/Group 397.png';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { NavLink } from 'react-router-dom';

const PassportGetInfo = () => {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  let [isChecked, setIsChecked] = useState(false);

  const handleInputNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleInputEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const handleCheckboxChange = (e) => {
    isChecked = e.target.checked;
    setIsChecked(isChecked);
  }

  const validation = () => {
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (isChecked && nameRegex.test(name) && emailRegex.test(email)) {
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
        sender_email_address: email
      }
      emailjs
        .send('service_5qrx1m2', 'template_8tm4kxp', templateParams, 'user_YfPAn01Z0q698Aq2evdOh')
        .then(function (response) {
          console.log('SUCCESS!', response.status, response.text);
          alert('Wiadomość została wysłana. Poinformujemy Cię, gdy Paszporty będą gotowe :)')
        }, function (error) {
          console.log('FAILED...', error);
        });

      setName("");
      setEmail("");
      setIsChecked(false);
    }
  }

  return (
    <section className="PassportGetInfo">
      <header className="PassportGetInfo--header">
        <h2 className="PassportGetInfo--header--info">PASZPORTY PROJEKTU LATERNA</h2>
        <h2 className="PassportDescription--header--info" style={{ color: '#AE4527' }}> NIE SĄ JESZCZE DOSTĘPNE.</h2>
        <h2 className="PassportDescription--header--info"> PODAJ NAM SWÓJ E-MAIL,</h2>
        <h2 className="PassportDescription--header--info">A WYŚLEMY CI INFORMACJĘ,</h2>
        <h2 className="PassportGetInfo--header--info">KIEDY BĘDĄ GOTOWE :)</h2>
      </header>
      <form className="PassportGetInfo--form">
        <Input type="text" label='Imię' value={name} name="name" onChange={handleInputNameChange} />
        <Input type="text" label='Adres e-mail' labelStyle={{ marginTop: useLayoutQueries().isDesktopOrLaptop ? 16 : 20 }} value={email} name="email" onChange={handleInputEmailChange} />
        <div className='PassportGetInfo--form--checkbox'>
          <Input type="checkbox" onChange={handleCheckboxChange} checked={isChecked} />
          <label htmlFor="checkbox">Akceptuję <NavLink to="/polityka-prywatnosci">Politykę Prywatności</NavLink> Projektu Laterna</label>
        </div>
      </form>
      <button id="sendBtn" onClick={sendMessage}>
        <img src={sendBtnImg} alt="Przycisk Wyślij" />
      </button>
    </section>
  )
}

export default PassportGetInfo;