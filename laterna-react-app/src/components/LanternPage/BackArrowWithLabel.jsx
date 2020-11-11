import React from 'react';

const BackArrowWithLabel = ({ lanternData, isFirst, isLast }) => (
  <NavLink to={!isFirst ? `/latarnie/${lanternData.urlSubPath}` : '/projekt-laterna'}>
    <button id="goBack">
      <img src={arrow} alt={isFirst ? "strzałka do powrotu do strony głównej" : "poprzednia strona"} />
      <p>
        {isFirst ? "strona główna" : (lanternData.shortName || lanterData.name)}
      </p>
    </button>
  </NavLink>
)

export default BackArrowWithLabel;

{/* <NavLink to={lanternId > 0 ? `/projekt-laterna/latarnie/${parseInt(lanternId) - 1}` : '/projekt-laterna'}>
<button id="goBack">
  <img src={arrow} alt="strzałka do powrotu do strony głównej" />
  <p>
    {lanternId > 0 ? `${lanterns[parseInt(lanternId) - 1].name === 'gdańsk port północny' ? 'gdańsk' : lanterns[parseInt(lanternId) - 1].name === 'gdańsk nowy port' ? 'gdańsk' : lanterns[parseInt(lanternId) - 1].name}` : 'strona gł.'}
  </p>
</button>
</NavLink> */}