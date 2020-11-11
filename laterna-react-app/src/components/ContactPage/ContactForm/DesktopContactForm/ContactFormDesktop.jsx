import React from 'react';
import Input from '../../../Elements/Input';
import '../ContactForm.scss';
import sendBtnImg from '../../../../assets/images/Group 397.png';

const ContactFormDesktop = () => {

  return (
    <>
      <h2 className="ContactForm--header">FORMULARZ KONTAKTOWY</h2>
      <form className="ContactForm--form">
        <div className="ContactForm--name-wrapper">
          <Input type="text" label="Imię i nazwisko" />
          <Input type="text" label="Adres e-mail" />
        </div>
        <Input type="text" label="Tytuł wiadomości" labelStyle={{ marginTop: 16 }} />
        <Input type="text" label="Treść wiadomości" inputStyle={{ height: 223 }} labelStyle={{ marginTop: 16 }} />
      </form>
      <button id="sendBtn">
        <img src={sendBtnImg} alt="Przycisk Wyślij" />
      </button>
    </>
  )
}

export default ContactFormDesktop;