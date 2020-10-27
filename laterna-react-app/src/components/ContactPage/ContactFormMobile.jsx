import React from 'react';
import Input from '../Input';
import './ContactForm.scss';
import sendBtnImg from '../../assets/images/Group 397.png';

const ContactFormMobile = () => {

  return (
    <>
      <h2 className="ContactForm--header">FORMULARZ KONTAKTOWY</h2>
      <form className="ContactForm--form">
        <Input type="text" label="Imię i nazwisko" />
        <Input type="text" label="Adres e-mail" labelStyle={{ marginTop: 20 }} />
        <Input type="text" label="Treść wiadomości" labelStyle={{ marginTop: 20 }} inputStyle={{ height: 239 }} />
        <div className='ContactForm--form--checkbox'>
          <Input type="checkbox" />
          <label htmlFor="checkbox">Akceptuję Politykę Prywatności Projektu Laterna</label>
        </div>
      </form>
      <button id="sendBtn">
        <img src={sendBtnImg} alt="Przycisk Wyślij" />
      </button>
    </>
  )
}

export default ContactFormMobile;