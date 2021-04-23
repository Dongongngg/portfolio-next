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
//  components
import SubTitle from './Title';
//  data
import data from '../assets/data.json';

const SkillHolder: React.FC = () => {
  const classes = useStyles();
  return (
    <Container maxWidth='lg'>
      <SubTitle name='My Skills' />
      <Grid container>
        <Grid item xs={12} md={6} className={classes.typeWrapper}>
          <Grid container>
            <Grid item xs={6} md={4} className={classes.typeTitleWrapper}>
              <Container maxWidth='lg'>
                <CodeIcon fontSize='large' color='secondary' />
                <Typography variant='h4'>Language</Typography>
              </Container>
            </Grid>
            <Grid item xs={6} md={8} className={classes.typeContentWrapper}>
              <Container maxWidth='lg'>
                {data.skill.language.map((e, i) => (
                  <Typography key={i} variant='h5'>
                    {e}
                  </Typography>
                ))}
              </Container>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.typeWrapper}>
          <Grid container>
            <Grid item xs={6} md={4} className={classes.typeTitleWrapper}>
              <Container maxWidth='lg'>
                <FlipToFrontIcon fontSize='large' color='secondary' />
                <Typography variant='h4'>Front-end</Typography>
              </Container>
            </Grid>
            <Grid item xs={6} md={8} className={classes.typeContentWrapper}>
              <Container maxWidth='lg'>
                {data.skill.frontend.map((e, i) => (
                  <Typography key={i} variant='h5'>
                    {e}
                  </Typography>
                ))}
              </Container>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.typeWrapper}>
          <Grid container>
            <Grid item xs={6} md={4} className={classes.typeTitleWrapper}>
              <Container maxWidth='lg'>
                <FlipToFrontIcon fontSize='large' color='secondary' />
                <Typography variant='h4'>UI</Typography>
              </Container>
            </Grid>
            <Grid item xs={6} md={8} className={classes.typeContentWrapper}>
              <Container maxWidth='lg'>
                {data.skill.ui.map((e, i) => (
                  <Typography key={i} variant='h5'>
                    {e}
                  </Typography>
                ))}
              </Container>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.typeWrapper}>
          <Grid container>
            <Grid item xs={6} md={4} className={classes.typeTitleWrapper}>
              <Container maxWidth='lg'>
                <FlipToBackIcon fontSize='large' color='secondary' />
                <Typography variant='h4'>Back-end</Typography>
              </Container>
            </Grid>
            <Grid item xs={6} md={8} className={classes.typeContentWrapper}>
              <Container maxWidth='lg'>
                {data.skill.backend.map((e, i) => (
                  <Typography key={i} variant='h5'>
                    {e}
                  </Typography>
                ))}
              </Container>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.typeWrapper}>
          <Grid container>
            <Grid item xs={6} md={4} className={classes.typeTitleWrapper}>
              <Container maxWidth='lg'>
                <StorageIcon fontSize='large' color='secondary' />
                <Typography variant='h4'>Database</Typography>
              </Container>
            </Grid>
            <Grid item xs={6} md={8} className={classes.typeContentWrapper}>
              <Container maxWidth='lg'>
                {data.skill.database.map((e, i) => (
                  <Typography key={i} variant='h5'>
                    {e}
                  </Typography>
                ))}
              </Container>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.typeWrapper}>
          <Grid container>
            <Grid item xs={6} md={4} className={classes.typeTitleWrapper}>
              <Container maxWidth='lg'>
                <UpdateIcon fontSize='large' color='secondary' />
                <Typography variant='h4'>Version</Typography>
              </Container>
            </Grid>
            <Grid item xs={6} md={8} className={classes.typeContentWrapper}>
              <Container maxWidth='lg'>
                {data.skill.version.map((e, i) => (
                  <Typography key={i} variant='h5'>
                    {e}
                  </Typography>
                ))}
              </Container>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.typeWrapper}>
          <Grid container>
            <Grid item xs={6} md={4} className={classes.typeTitleWrapper}>
              <Container maxWidth='lg'>
                <BuildIcon fontSize='large' color='secondary' />
                <Typography variant='h4'>Devops</Typography>
              </Container>
            </Grid>
            <Grid item xs={6} md={8} className={classes.typeContentWrapper}>
              <Container maxWidth='lg'>
                {data.skill.devops.map((e, i) => (
                  <Typography key={i} variant='h5'>
                    {e}
                  </Typography>
                ))}
              </Container>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} className={classes.typeWrapper}>
          <Grid container>
            <Grid item xs={6} md={4} className={classes.typeTitleWrapper}>
              <Container maxWidth='lg'>
                <DashboardIcon fontSize='large' color='secondary' />
                <Typography variant='h4'>CMS</Typography>
              </Container>
            </Grid>
            <Grid item xs={6} md={8} className={classes.typeContentWrapper}>
              <Container maxWidth='lg'>
                {data.skill.CMS.map((e, i) => (
                  <Typography key={i} variant='h5'>
                    {e}
                  </Typography>
                ))}
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
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
