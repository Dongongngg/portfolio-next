import React from 'react';
//  mui
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Typography, Grid } from '@material-ui/core';
//  icons
import CodeIcon from '@material-ui/icons/Code';
import FlipToFrontIcon from '@material-ui/icons/FlipToFront';
import FlipToBackIcon from '@material-ui/icons/FlipToBack';
import StorageIcon from '@material-ui/icons/Storage';
import UpdateIcon from '@material-ui/icons/Update';
import BuildIcon from '@material-ui/icons/Build';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CloudIcon from '@material-ui/icons/Cloud';
//  components
import SubTitle from './Title';
//  data
import data from '../assets/data.json';

const SkillHolder: React.FC = () => {
  const classes = useStyles();
  const skills = data.skill;

  const skillItems = [];

  const renderIcon = (title: string) => {
    if (title === 'language') {
      return <CodeIcon fontSize='large' color='secondary' />;
    } else if (title === 'frontend') {
      return <FlipToFrontIcon fontSize='large' color='secondary' />;
    } else if (title === 'UI') {
      return <FlipToFrontIcon fontSize='large' color='secondary' />;
    } else if (title === 'backend') {
      return <FlipToBackIcon fontSize='large' color='secondary' />;
    } else if (title === 'database') {
      return <StorageIcon fontSize='large' color='secondary' />;
    } else if (title === 'devops') {
      return <BuildIcon fontSize='large' color='secondary' />;
    } else if (title === 'version') {
      return <UpdateIcon fontSize='large' color='secondary' />;
    } else if (title === 'CMS') {
      return <DashboardIcon fontSize='large' color='secondary' />;
    } else if (title === 'AWS') {
      return <CloudIcon fontSize='large' color='secondary' />;
    }
  };

  for (const [key, value] of Object.entries(skills)) {
    skillItems.push(
      <Grid item xs={12} md={6} className={classes.typeWrapper} key={key}>
        <Grid container>
          <Grid item xs={6} md={4} className={classes.typeTitleWrapper}>
            <Container maxWidth='lg'>
              {renderIcon(key)}
              <Typography variant='h3'>{key}</Typography>
            </Container>
          </Grid>
          <Grid item xs={6} md={8} className={classes.typeContentWrapper}>
            <Container maxWidth='lg'>
              {value.map((e, i) => (
                <Typography key={i} variant='h4'>
                  {e}
                </Typography>
              ))}
            </Container>
          </Grid>
        </Grid>
      </Grid>,
    );
  }

  return (
    <Container maxWidth='lg'>
      <SubTitle name='My Skills' />
      <Grid container>{skillItems.map(value => value)}</Grid>
    </Container>
  );
};

export default SkillHolder;

const useStyles = makeStyles((theme: Theme) => ({
  typeWrapper: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    '@media(max-width:960px)': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  typeTitleWrapper: {
    textAlign: 'center',
    borderRight: `2px solid ${theme.palette.divider}`,
  },
  typeContentWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
}));
