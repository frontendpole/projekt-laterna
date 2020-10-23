import React from 'react';
import './ProjectDescription.scss';
import { useMediaQuery } from 'react-responsive';
import aboutProjectImg1 from '../../assets/images/Mateusz Frycz  CC BY-SA 3.0 PL.png';
import aboutProjectImg2 from '../../assets/images/101681023_294729721553318_7178833893036916736_n.png';
import logoPJATK from '../../assets/images/Logo_PL_4.png';
import imgDesktop1 from '../../assets/images/Chron-Paul (Diskussion)  CC BY-SA 3.0 DE.png';
import imgDesktop2 from '../../assets/images/101681023_294729721553318_7178833893036916736_n (2).png';
import logoPJATKDesktop from '../../assets/images/Logo_PL_1.png';

const ProjectDescription = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  return (
    <section className="ProjectDescription">
      <article className="ProjectDescription--article">

        {isTabletOrMobile &&
          <>
            <h2 className="ProjectDescription--title">PROJEKT LATERNA</h2>
            <p>to inicjatywa, której celem jest promocja latarni morskich polskiego wybrzeża jako wyjątkowego dziedzictwa kulturalnego oraz jako ciekawej destynacji podróżniczej.</p>
            <img src={aboutProjectImg1} alt="zdjęcie latarni morskiej" />
            <p>Nazwa projektu została zainspirowana jednym z elementów budowy latarni morskiej (laterny). Potocznie mówi się, że jest to samo serce latarni, ponieważ to właśnie z laterny wydobywa się migające światło. Jest to przeszklone pomieszczenie w kształcie walca, w którym znajdują się urządzenia optyczne i źródło światła.</p>
            <img src={aboutProjectImg2} alt="zdjęcie autorki projektu przy mapie polskiego wybrzeża" />
            <p>Inicjatorką projektu jest Sabina Strzelecka - absolwentka Polsko-Japońskiej Akademii Technik Komputerowych w Warszawie na wydziale Sztuki Nowych Mediów oraz miłośniczka latarni morskich w Polsce i na świecie. Stworzyła Projekt w ramach pracy dyplomowej, której promotorami byli:</p>
            <p>dr Anna Barlik <br /> mgr inż. Marcin Wichrowski <br /> dr Marzena Królikowska-Dziubecka</p>
            <img src={logoPJATK} alt="logo Polsko-Japońskiej Akademii Technik Komputerowych" />
            <p>Warszawa, 2020</p>
          </>
        }

        {isDesktopOrLaptop &&
          <>
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
        }

      </article>
    </section>
  )
}

export default ProjectDescription;