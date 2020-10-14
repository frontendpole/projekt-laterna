import React from 'react';
import './ProjectDescription.scss';
import aboutProjectImg1 from '../../assets/images/Mateusz Frycz  CC BY-SA 3.0 PL.png';
import aboutProjectImg2 from '../../assets/images/101681023_294729721553318_7178833893036916736_n.png';
import logoPJATK from '../../assets/images/Logo_PL_4.png';

const ProjectDescription = () => {

  return (
    <section className="ProjectDescription">
      <article className="ProjectDescription--article">
        <h2 className="ProjectDescription--title">PROJEKT LATERNA</h2>
        <p>to inicjatywa, której celem jest promocja latarni morskich polskiego wybrzeża jako wyjątkowego dziedzictwa kulturalnego oraz jako ciekawej destynacji podróżniczej.</p>
        <img src={aboutProjectImg1} alt="" />
        <p>Nazwa projektu została zainspirowana jednym z elementów budowy latarni morskiej (laterny). Potocznie mówi się, że jest to samo serce latarni, ponieważ to właśnie z laterny wydobywa się migające światło. Jest to przeszklone pomieszczenie w kształcie walca, w którym znajdują się urządzenia optyczne i źródło światła.</p>
        <img src={aboutProjectImg2} alt="" />
        <p>Inicjatorką projektu jest Sabina Smoleńska - absolwentka Polsko-Japońskiej Akademii Technik Komputerowych w Warszawie na wydziale Sztuki Nowych Mediów oraz miłośniczka latarni morskich w Polsce i na świecie. Stworzyła Projekt w ramach pracy dyplomowej, które promotorami byli:</p>
        <p>dr Anna Barlik <br /> mgr inż. Marcin Wichrowski <br /> dr Marzena Królikowska-Dziubecka</p>
        <img src={logoPJATK} alt="" />
        <p>Warszawa, 2020</p>
      </article>
    </section>
  )
}

export default ProjectDescription;