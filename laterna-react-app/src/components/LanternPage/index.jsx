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

  const titleStyle = {
    width: '897px',
    height: '127px',
    textAlign: 'left',
    fontSize: '65px',
    lineHeight: '78px',
    top: "9%",
    left: "10%"
  }

  const isDesktopOrLaptop = useLayoutQueries().isDesktopOrLaptop;

  const isTabletOrMobile = useLayoutQueries().isTabletOrMobile;

  return (
    <>
      {lanterns.map(lantern => (
        lantern.id === id &&
        <section key={lantern.id}>
          {isDesktopOrLaptop &&
            <HeaderImg
              headerImg={lantern.headerImg}
              title={lantern.name}
              titleStyle={titleStyle} />
          }
          <section className="Lantern">
            <div className="Lantern--wrapper">

              <LanternHeader
                previousId={lantern.id - 1}
                previousName={lantern.id !== "0" ? lanterns[lantern.id - 1].shortName || lanterns[lantern.id - 1].name : null}
                headerImgUrl={lantern.headerImgUrl}
                lanternName={lantern.name}
                nextId={parseInt(lantern.id) + 1}
                nextName={lantern.id !== "16" ? lanterns[parseInt(lantern.id) + 1].shortName || lanterns[parseInt(lantern.id) + 1].name : null}
                isFirst={lantern.id === "0"}
                isLast={lantern.id === "16"}
                previousUrl={lantern.id !== "0" ? lanterns[lantern.id - 1].url : null}
                nextUrl={lantern.id !== "16" ? lanterns[parseInt(lantern.id) + 1].url : null}
              />

              <div className="Lantern--basicInfoWrapper">
                {isDesktopOrLaptop &&
                  <img
                    src={lantern.desktopImg}
                    alt={`grafika latarni morskiej w miejscowości ${lantern.name}`} />}
                <LanternBasicInfo
                  name={lantern.name}
                  constructionYear={lantern.constructionYear}
                  height={lantern.height}
                  lightHeight={lantern.lightHeight}
                  lightDetails={lantern.lightDetails}
                  address={lantern.address}
                  address2={lantern.address2}
                  introduction={lantern.introduction}
                />
              </div>

              {isDesktopOrLaptop &&
                <>
                  <LanternCustomInfo array={lantern.introDesktop} />

                  <div className="LanternPageDesktop--pictures">
                    {lantern.picturesDesktop.map(element => (
                      <img src={element.img} alt="zdjęcie latarni morskiej" />
                    ))}
                  </div>

                  {lantern.restDesktop &&
                    <LanternCustomInfo array={lantern.restDesktop} />
                  }

                  <footer className="lanternRest--footer">
                    <p>Zdjęcia:</p>
                    <p>{lantern.footer}</p>
                  </footer>
                </>}
              {isTabletOrMobile &&
                <LanternRest
                  introImg={lantern.introImg}
                  name={lantern.name}
                  rest={lantern.rest}
                  footer={lantern.footer}
                />}
            </div>
          </section>
        </section>
      ))}
    </>
  )
}
export default LanternPage;