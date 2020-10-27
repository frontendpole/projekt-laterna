import React from 'react';
import './ProjectDescription.scss';
import imgDesktop1 from '../../assets/images/Chron-Paul (Diskussion)  CC BY-SA 3.0 DE.png';
import imgDesktop2 from '../../assets/images/101681023_294729721553318_7178833893036916736_n (2).png';
import logoPJATKDesktop from '../../assets/images/Logo_PL_1.png';
import backgroundWave from '../../assets/images/Path 1873.png';

const DescriptionDesktop = () => {

  return (
    <>
      <img id="background-wave" src={backgroundWave} alt="fala w tle" />
      <div className="ProjectDescription--wrapper1">
        <div className="ProjectDescription--text-wrapper1">
          <p>Projekt Laterna to inicjatywa, której celem jest promocja latarni morskich polskiego wybrzeża jako wyjątkowego dziedzictwa kulturalnego oraz jako ciekawej destynacji podróżniczej.</p>
          <p>Nazwa projektu została zainspirowana jednym z elementów budowy latarni morskiej (laterny). Potocznie mówi się, że jest to samo serce latarni, ponieważ to właśnie z laterny wydobywa się migające światło. Jest to przeszklone pomieszczenie w kształcie walca, w którym znajdują się urządzenia optyczne i źródło światła.</p>
        </div>
        <img src={imgDesktop1} alt="zdjęcie latarni morskiej" />
      </div>
      <div className="ProjectDescription--wrapper2">
        <img src={imgDesktop2} alt="zdjęcie autorki projektu przy mapie polskiego wybrzeża" />
        <div className="ProjectDescription--text-wrapper2">
          <p>Inicjatorką projektu jest Sabina Strzelecka - absolwentka Polsko-Japońskiej Akademii Technik Komputerowych w Warszawie na wydziale Sztuki Nowych Mediów oraz miłośniczka latarni morskich w Polsce i na świecie.</p>
          <p>Stworzyła Projekt w ramach pracy dyplomowej, której promotorami byli:</p>
          <p>dr Anna Barlik <br /> mgr inż. Marcin Wichrowski <br /> dr Marzena Królikowska-Dziubecka</p>
          <img src={logoPJATKDesktop} alt="logo Polsko-Japońskiej Akademii Technik Komputerowych" />
        </div>
      </div>
    </>
  )
}

export default DescriptionDesktop;