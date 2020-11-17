import React from 'react';
import LanternHeader from './LanternHeader';
import LanternBasicInfo from './LanternBasicInfo';
import LanternRest from './LanternRest';
import './LanternRest.scss';
import './LanternPageDesktop/LanternPageDesktop.scss';
import './LanternPage.scss';
import { useParams } from 'react-router-dom';
import LanternCustomInfo from './LanternPageDesktop/LanternCustomInfo';
import HeaderImg from '../Header/HeaderImg';
import lanterns from '../../data/lanterns.json';
import useLayoutQueries from '../../functions/useLayoutQueries';

const LanternPage = () => {

  let { id } = useParams();

  let previousId = parseInt(id) - 1;

  let nextId = parseInt(id) + 1;

  const titleStyle = {
    width: '897px',
    height: '127px',
    textAlign: 'left',
    fontSize: '65px',
    lineHeight: '78px',
    top: "85%",
    left: "10%"
  }

  return (
    <>
      {useLayoutQueries().isDesktopOrLaptop &&
        <HeaderImg
          headerImg={lanterns[id].headerImg}
          title={lanterns[id].name}
          titleStyle={titleStyle} />
      }
      <section className="Lantern" key={id}>
        <div className="Lantern--wrapper">

          <LanternHeader
            previousId={previousId}
            previousName={id != "0" ? lanterns[previousId].shortName || lanterns[previousId].name : 'strona gł.'}
            headerImgUrl={lanterns[id].headerImgUrl}
            lanternName={lanterns[id].name}
            lanternId={id}
            nextId={nextId}
            nextName={id != "16" ? lanterns[nextId].shortName || lanterns[nextId].name : 'strona gł.'}
            isFirst={id === "0"}
            isLast={id === "16"}
          />

          <div className="Lantern--basicInfoWrapper">
            {useLayoutQueries().isDesktopOrLaptop &&
              <img
                src={lanterns[id].desktopImg}
                alt={`grafika latarni morskiej w miejscowości ${lanterns[id].name}`} />}
            <LanternBasicInfo
              desktopImg={lanterns[id].desktopImg}
              name={lanterns[id].name}
              constructionYear={lanterns[id].constructionYear}
              height={lanterns[id].height}
              lightHeight={lanterns[id].lightHeight}
              lightDetails={lanterns[id].lightDetails}
              address={lanterns[id].address}
              address2={lanterns[id].address2}
              introduction={lanterns[id].introduction}
            />
          </div>

          {useLayoutQueries().isDesktopOrLaptop &&
            <>
              <LanternCustomInfo array={lanterns[id].introDesktop} />

              <div className="LanternPageDesktop--pictures">
                {lanterns[id].picturesDesktop.map(element => (
                  <img src={element.img} alt="zdjęcie latarni morskiej" />
                ))}
              </div>

              {lanterns[id].restDesktop &&
                <LanternCustomInfo array={lanterns[id].restDesktop} />
              }

              <footer className="lanternRest--footer">
                <p>Zdjęcia:</p>
                <p>{lanterns[id].footer}</p>
              </footer>
            </>}

          {useLayoutQueries().isTabletOrMobile &&
            <LanternRest
              introImg={lanterns[id].introImg}
              name={lanterns[id].name}
              rest={lanterns[id].rest}
              footer={lanterns[id].footer}
            />}
        </div>
      </section>
    </>
  )
}

export default LanternPage;