import React from 'react';
import LanternHeader from './LanternHeader';
import LanternBasicInfo from './LanternBasicInfo';
import './LanternPage.scss';
import { useParams } from 'react-router-dom';
import lanterns from '../../data/lanterns.json';

const LanternPage = () => {

  let { id } = useParams();

  return (
    <>
      <section className="Lantern">
        <div className="Lantern--wrapper">
          <LanternHeader lanternId={id} />
          <LanternBasicInfo lanternId={id} />
        </div>
      </section>
    </>
  )
}

export default LanternPage;