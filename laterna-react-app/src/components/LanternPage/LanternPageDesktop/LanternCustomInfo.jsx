import React from 'react';
import './LanternPageDesktop.scss';

const LanternCustomInfo = ({ array }) => {

  let imgFound = false;
  const checkIfContainsImg = () => {

    for (let i = 0; i < array.length; i++) {

      if (array[i].img) {
        imgFound = true;
      }
    }
  }
  checkIfContainsImg();


  return (
    <>
      {imgFound &&
        <div className="LanternPageDesktop--wrapper">

          <div className="LanternPageDesktop--text">
            {array.map(element => (
              <p>{element.p}</p>
            ))}
          </div>
          <div className="LanternPageDesktop--photo">
            {array.map(element => (
              <img src={element.img} alt="zdjęcie latarni morskiej" />
            ))}
          </div>
        </div>}

      {imgFound === false &&
        <div className="LanternPageDesktop--textSolo">
          {array.map(element => (
            <p>{element.p}</p>
          ))}
        </div>
      }

    </>
  )

}

export default LanternCustomInfo;