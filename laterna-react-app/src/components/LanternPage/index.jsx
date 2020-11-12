import React from 'react';
import { useMediaQuery } from 'react-responsive';
import LanternHeader from './LanternHeader';
import LanternBasicInfo from './LanternBasicInfo';
import LanternRest from './LanternRest';
import './LanternPage.scss';
import { useParams } from 'react-router-dom';
import LanternPageDesktop from './LanternPageDesktop/LanternPageDesktop';

const LanternPage = () => {

  let { id } = useParams();

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  return (
    <section className="Lantern">
      <div className="Lantern--wrapper">
        {isTabletOrMobile &&
          <>
            <LanternHeader lanternId={id} />
            <LanternBasicInfo lanternId={id} />
            <LanternRest lanternId={id} />
          </>
        }
      </div>
      {isDesktopOrLaptop &&
        <LanternPageDesktop lanternId={id} />}
    </section>
  )
}

export default LanternPage;