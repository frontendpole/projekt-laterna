import React from 'react';
import './PassportDescription.scss';
import PassportImg1 from '../../assets/images/Zrzut ekranu 2020-06-30 o 20.47.15.png';
import PassportImg2 from '../../assets/images/Zrzut ekranu 2020-06-05 o 15.18.42.png';
import PassportImg3 from '../../assets/images/paszport mockup 13.png';
import PassportImg4 from '../../assets/images/paszport mockup 4.png';
import PassportImg5 from '../../assets/images/paszport mockup 3.png';
import PassportImg6 from '../../assets/images/paszport mockup -2.png';
import PassportGetInfoDesktop from './PassportGetInfoDesktop';

const PassportDesktop = () => {

  return (
    <>
      <header className="PassportDescription--header">
        <h2 className="PassportDescription--header--info">PASZPORT MIŁOŚNIKA</h2>
        <h2 className="PassportDescription--header--info">LATARNI MORSKICH</h2>
        <h2 className="PassportDescription--header--info" style={{ color: '#AE4527' }}>TO NIEZWYKŁA PAMIĄTKA</h2>
        <h2 className="PassportDescription--header--info" style={{ color: '#AE4527' }}>Z WAKACJI NAD POLSKIM MORZEM!</h2>
      </header>
      <img src={PassportImg1} alt="okładka górna paszportu miłośnika latarni morskich" />
      <img src={PassportImg2} alt="wnętrze paszportu miłośnika latarni morskich, latarnia w Kołobrzegu" />
      <img src={PassportImg3} alt="wnętrze paszportu miłośnika latarni morskich, strona tytułowa" />
      <img src={PassportImg3} alt="wnętrze paszportu miłośnika latarni morskich, strona tytułowa" />
      <div className="PassportDescription--text">
        <p>Do Paszportu miłośnika latarni morskich, tak jak do prawdziwych paszportów, wbija się pieczątki z miejsc, które się odwiedziło.</p>
        <p>Do naszego Paszportu pieczątki wbija nie celnik, a latarnik, a same pieczęci nie są symbolami odległych, egzotycznych krajów, a pięknych i unikalnych latarni polskiego wybrzeża.</p>
        <p>Abstrakcyjne kształty na każdej stronie Paszportu po wizycie u latarnika zamieniają się w rysunki przywołujące wspomnienia z odwiedzin latarni. Krótkie informacje o każdej z nich pozwalają je lepiej poznać i zrozumieć ich mechanizm.</p>
      </div>
      <PassportGetInfoDesktop />
      <img src={PassportImg6} alt="okładka pełna paszportu miłośnika latarni morskich" />
    </>
  )
}

export default PassportDesktop;