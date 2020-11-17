import React from 'react';
import './ProjectDescription.scss';
import DescriptionMobile from './MobileProjectDesc/DescriptionMobile';
import DescriptionDesktop from './DesktopProjectDesc/DescriptionDesktop';
import useLayoutQueries from '../../../functions/useLayoutQueries';

const ProjectDescription = () => {

  return (
    <section className="ProjectDescription">
      <article className="ProjectDescription--article">

        {useLayoutQueries().isTabletOrMobile &&
          <DescriptionMobile />
        }

        {useLayoutQueries().isDesktopOrLaptop &&
          <DescriptionDesktop />
        }

      </article>
    </section>
  )
}

export default ProjectDescription;