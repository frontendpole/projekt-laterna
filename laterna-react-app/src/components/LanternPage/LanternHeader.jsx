import React from 'react';
import './LanternHeader.scss';
import BackArrowWithLabel from './BackArrowWithLabel';
import ForwardArrowWithLabel from './ForwardArrowWithLabel';
import useLayoutQueries from '../../functions/useLayoutQueries';

const LanternHeader = ({ headerImgUrl, lanternName, previousName, previousId, nextName, nextId, isFirst, isLast }) => {

  return (
    <>
      <header className="Lantern--header">
        <BackArrowWithLabel
          previousId={previousId}
          previousName={previousName}
          isFirst={isFirst}
        />
        <ForwardArrowWithLabel
          nextId={nextId}
          nextName={nextName}
          isLast={isLast}
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








