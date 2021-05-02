import React from 'react';
import { NextSeo } from 'next-seo';
//  components
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import SkillHolder from '../components/SkillHolder';
import WorkExpHolder from '../components/WorkExpHolder';
import ProjectHolder from '../components/ProjectHolder';
import Footer from '../components/Footer';
//  layout
import PortfolioLayout from '../layouts/Portfolio';

const LandingPage: React.FC = () => {
  return (
    <>
      <NextSeo
        title='Jingfu Dong portfolio'
        description='Full-stack developer'
        openGraph={{
          url: 'https://www.jingfudong.com',
          title: 'Jingfu Dong',
          description: 'Full-stack developer',
          images: [
            {
              url: '/avatar.jpg',
              width: 800,
              height: 600,
              alt: 'Jingfu Dong',
            },
          ],
          site_name: 'Jingfu Dong portfolio',
        }}
      />

      <NavBar />
      <PortfolioLayout
        banner={<Banner />}
        skill={<SkillHolder />}
        work={<WorkExpHolder />}
        project={<ProjectHolder />}
      />
      <Footer />
    </>
  );
};

export default LandingPage;
