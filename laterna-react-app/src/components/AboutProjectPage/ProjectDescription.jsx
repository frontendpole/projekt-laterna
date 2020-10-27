import React from 'react';
import './ProjectDescription.scss';
import { useMediaQuery } from 'react-responsive';
import DescriptionMobile from './DescriptionMobile';
import DescriptionDesktop from './DescriptionDesktop';

const ProjectDescription = () => {

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' });

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1024px)'
  });

  return (
    <section className="ProjectDescription">
      <article className="ProjectDescription--article">

        {isTabletOrMobile &&
          <DescriptionMobile />
        }

        {isDesktopOrLaptop &&
          <DescriptionDesktop />
        }

      </article>
    </section>
  )
}

export default ProjectDescription;