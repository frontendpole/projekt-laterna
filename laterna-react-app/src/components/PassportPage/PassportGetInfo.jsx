import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './PassportGetInfo.scss';
import Input from '../Input';
import sendBtnImg from '../../assets/images/Group 397.png';

const PassportGetInfo = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

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
        <Input type="text" label='Imię' />
        <Input type="text" label='Adres e-mail' labelStyle={{ marginTop: isDesktopOrLaptop ? 16 : 20 }} />
        <div className='PassportGetInfo--form--checkbox'>
          <Input type="checkbox" />
          <label htmlFor="checkbox">Akceptuję Politykę Prywatności Projektu Laterna</label>
        </div>
      </form>
      <button id="sendBtn">
        <img src={sendBtnImg} alt="Przycisk Wyślij" />
      </button>
    </section>
  )
}

export default PassportGetInfo;