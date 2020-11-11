import React from 'react';

const ForwardArrowWithLabel = ({ lanternData, isFirst, isLast }) => (
  <NavLink to={!isLast ? `/projekt-laterna/latarnie/${lanternData.urlSubPath}` : '/projekt-laterna'}>
    <button id="goForward">
      <img src={arrow} alt={isLast ? "strzałka do powrotu do strony głównej" : "poprzednia strona"} />
      <p>
        {isLast ? "strona główna" : (lanternData.shortName || lanterData.name)}
      </p>
    </button>
  </NavLink>
)

export default ForwardArrowWithLabel;