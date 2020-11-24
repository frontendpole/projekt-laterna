import React from 'react';
import './LanternHeader.scss';
import BackArrowWithLabel from './BackArrowWithLabel';
import ForwardArrowWithLabel from './ForwardArrowWithLabel';
import useLayoutQueries from '../../functions/useLayoutQueries';

const LanternHeader = ({ headerImgUrl, lanternName, previousName, previousId, nextName, nextId, isFirst, isLast, previousUrl, nextUrl }) => {

  return (
    <>
      <header className="Lantern--header" style={isFirst ? { justifyContent: "flex-end" } : null}>
        <BackArrowWithLabel
          previousId={previousId}
          previousName={previousName}
          isFirst={isFirst}
          previousUrl={previousUrl}
        />
        <ForwardArrowWithLabel
          nextId={nextId}
          nextName={nextName}
          isLast={isLast}
          nextUrl={nextUrl}
        />
      </header>
      {useLayoutQueries().isTabletOrMobile &&
        <img
          src={headerImgUrl}
          alt={`grafika latarni morskiej w miejscowości ${lanternName}`} />}
    </>
  )
}
export default LanternHeader;