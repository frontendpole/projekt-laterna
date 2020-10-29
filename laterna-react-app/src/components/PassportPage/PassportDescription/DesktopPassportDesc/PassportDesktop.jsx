import React from 'react';
import './PassportDescription.scss';
import PassportImg1Desktop from '../../../../assets/images/paszport mockup 6.png';
import PassportImg2Desktop from '../../../../assets/images/paszport mockup 4.png';
import PassportImg3Desktop from '../../../../assets/images/paszport mockup 3.png';
import PassportImg4Desktop from '../../../../assets/images/desktop/Group 256.png';
import PassportImg5Desktop from '../../../../assets/images/Zrzut ekranu 2020-06-13 o 19.42.47.png';
import PassportImg6Desktop from '../../../../assets/images/desktop/paszport mockup 1.png';
import passportWaveImg from '../../../../assets/images/desktop/Path 1943@2x.png';
import PassportGetInfo from './PassportGetInfo';

const PassportDesktop = () => {

  return (
    <>
      <img id='background-wave' src={passportWaveImg} alt="fala w tle" />
      <div className="PassportDescription--wrapper">
        <header className="PassportDescription--header">
          <h2 className="PassportDescription--header--info">PASZPORT MIŁOŚNIKA</h2>
          <h2 className="PassportDescription--header--info">LATARNI MORSKICH</h2>
          <h2 className="PassportDescription--header--info" style={{ color: '#AE4527' }}>TO NIEZWYKŁA PAMIĄTKA</h2>
          <h2 className="PassportDescription--header--info" style={{ color: '#AE4527' }}>Z WAKACJI NAD POLSKIM MORZEM!</h2>
        </header>
        <img src={PassportImg1Desktop} alt="okładka pełna paszportu miłośnika latarni morskich" />
        <img src={PassportImg2Desktop} alt="wnętrze paszportu miłośnika latarni morskich, latarnia w Czołpinie" />
        <img src={PassportImg3Desktop} alt="wnętrze paszportu miłośnika latarni morskich, latarnia w Darłowie" />
        <div className="PassportDescription--2pictures">
          <img src={PassportImg4Desktop} alt="okładka górna paszportu miłośnika latarni morskich" />
          <img src={PassportImg5Desktop} alt="wnętrze paszportu miłośnika latarni morskich, latarnia Gdańsk Nowy Port" />
        </div>
        <div className="PassportDescription--text">
          <p>Do Paszportu miłośnika latarni morskich, tak jak do prawdziwych paszportów, wbija się pieczątki z miejsc, które się odwiedziło.</p>
          <p>Do naszego Paszportu pieczątki wbija nie celnik, a latarnik, a same pieczęci nie są symbolami odległych, egzotycznych krajów, a pięknych i unikalnych latarni polskiego wybrzeża.</p>
          <p>Abstrakcyjne kształty na każdej stronie Paszportu po wizycie u latarnika zamieniają się w rysunki przywołujące wspomnienia z odwiedzin latarni. <br />Krótkie informacje o każdej z nich pozwalają je lepiej poznać i zrozumieć ich mechanizm.</p>
        </div>
        <PassportGetInfo />
        <img src={PassportImg6Desktop} alt="strona tytułowa paszportu miłośnika latarni morskich" />
      </div>
    </>
  )
}

export default PassportDesktop;