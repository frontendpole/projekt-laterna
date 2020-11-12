import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './LanternHeader.scss';
import lanterns from '../../data/lanterns.json';
import BackArrowWithLabel from './BackArrowWithLabel';
import ForwardArrowWithLabel from './ForwardArrowWithLabel';

const LanternHeader = ({ lanternId }) => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-device-width: 1024px)'
  // });

  return (
    <>
      <header className="Lantern--header">
        <BackArrowWithLabel lanternId={lanternId} isFirst={lanternId === "0" ? true : false} />
        <ForwardArrowWithLabel lanternId={lanternId} isLast={lanternId === "16" ? true : false} />
      </header>
      {isTabletOrMobile &&
        <img
          src={`${lanterns[lanternId].headerImgUrl}`}
          alt={`grafika latarni morskiej w miejscowości ${lanterns[lanternId].name}`} />}
    </>
  )
}
export default LanternHeader;








