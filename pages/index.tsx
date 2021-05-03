import React from 'react';
import { NextSeo } from 'next-seo';
import { NextPage } from 'next';
//  components
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import SkillHolder from '../components/SkillHolder';
import WorkExpHolder from '../components/WorkExpHolder';
import ProjectHolder from '../components/ProjectHolder';
import Footer from '../components/Footer';
//  layout
import PortfolioLayout from '../layouts/Portfolio';

import useTranslation from 'next-translate/useTranslation';

const LandingPage: NextPage = () => {
  const { t } = useTranslation('common');
  const title = t('site_title');
  const description = t('site_desc');
  return (
    <>
      <NextSeo
        title='Jingfu Dong portfolio'
        description='Full-stack developer'
        openGraph={{
          url: 'https://www.jingfudong.com',
          title: title,
          description: description,
          images: [
            {
              url: '/avatar.jpg',
              width: 800,
              height: 600,
              alt: 'Jingfu Dong',
            },
          ],
          site_name: title,
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
