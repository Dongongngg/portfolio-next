import React from 'react';

import Image from 'next/image';
//  mui
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
//  mui icons
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import SchoolIcon from '@material-ui/icons/School';
//  translate
import useTranslation from 'next-translate/useTranslation';

const Banner: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation('common');

  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item xs={12} md={4} className={classes.iconWrapper}>
          <Container maxWidth='lg'>
            <Grid container direction='column' alignContent='center' alignItems='center'>
              <div className={classes.avatarWrapper}>
                <Image src='/avatar.png' alt='Jingfu' layout='fill' className={classes.avatar} />
              </div>
              <Typography variant='h1'>{t('name')}</Typography>
              <Typography variant='h3' className={classes.role}>
                {t('role')}
              </Typography>
              <Grid container className={classes.logoWrapper}>
                <GitHubIcon
                  color='secondary'
                  className={classes.socialLogo}
                  onClick={() => {
                    window.open('https://github.com/Dongongngg');
                  }}
                />
                <LinkedInIcon
                  color='secondary'
                  className={classes.socialLogo2}
                  onClick={() => {
                    window.open('https://www.linkedin.com/in/jingfu-dong-james/');
                  }}
                />
                <EmailIcon
                  color='secondary'
                  className={classes.socialLogo2}
                  onClick={() => {
                    window.open('mailto:jingfu.dong0320@gmail.com');
                  }}
                />
                <DescriptionIcon
                  color='secondary'
                  className={classes.socialLogo}
                  onClick={() => {
                    window.open('Resume_Jingfu_Dong.pdf');
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12} md={8}>
          <Container maxWidth='lg'>
            <Grid
              container
              direction='column'
              alignContent='center'
              className={classes.introWrapper}
            >
              <Typography variant='h2'>{t('about_me_title')}</Typography>
              <Typography component='p' className={classes.about}>
                {t('about_me_1')}{' '}
                <Typography
                  color='secondary'
                  component='span'
                  display='inline'
                  className={classes.about}
                >
                  {t('hightlight_skill_1')}
                </Typography>{' '}
                +{' '}
                <Typography
                  color='secondary'
                  component='span'
                  display='inline'
                  className={classes.about}
                >
                  {t('hightlight_skill_2')}
                </Typography>
                {'.'}
              </Typography>
              <Typography variant='body1' component='p' className={classes.about}>
                {t('about_me_2')}
              </Typography>
              <Typography variant='body1' component='p' className={classes.about}>
                {t('about_me_3')}
              </Typography>

              <Grid container>
                <Grid item xs={12} sm={6} className={classes.eduWrapper}>
                  <SchoolIcon />
                  <Typography variant='h3'>{t('edu_title_1')}</Typography>
                  <Typography color='textSecondary' variant='caption'>
                    {t('edu_uni_1')}
                  </Typography>
                  <Typography variant='h4'>{t('edu_major_1')}</Typography>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.eduWrapper}>
                  <SchoolIcon />
                  <Typography variant='h3'>{t('edu_title_2')}</Typography>
                  <Typography color='textSecondary' variant='caption'>
                    {t('edu_uni_2')}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Banner;

const useStyles = makeStyles((theme: Theme) => ({
  role: { color: theme.palette.text.secondary },
  iconWrapper: {
    borderRight: `2px solid ${theme.palette.divider}`,
    '@media(max-width:960px)': {
      borderBottom: `2px solid ${theme.palette.divider}`,
      borderRight: 'none',
      paddingBottom: theme.spacing(4),
    },
  },
  avatarWrapper: {
    position: 'relative',
    borderRadius: '50%',
    overflow: 'hidden',
    height: 250,
    width: 250,
    border: `4px solid ${theme.palette.secondary.main}`,
    '@media(max-width:960px)': {
      height: 200,
      width: 200,
      marginBottom: theme.spacing(4),
    },
    marginBottom: theme.spacing(8),
  },
  avatar: { objectFit: 'cover' },
  introWrapper: {
    '@media(max-width:960px)': {
      paddingTop: theme.spacing(4),
    },
  },
  about: {
    marginBottom: theme.spacing(2),
  },
  logoWrapper: {
    paddingTop: theme.spacing(3),
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItem: 'center',
  },
  socialLogo: { fontSize: '2.5rem', cursor: 'pointer' },
  socialLogo2: { fontSize: '2.75rem', cursor: 'pointer' },
  eduWrapper: { marginTop: theme.spacing(2) },
}));
