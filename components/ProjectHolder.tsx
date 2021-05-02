import React from 'react';
//  mui
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Container, Paper, Grid, Typography, Divider } from '@material-ui/core';
//  components
import SubTitle from './Title';
//  icons
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
//  data
import data from '../assets/data.json';

interface ProjectProps {
  title: string;
  desc: string[];
  live?: string;
  github?: string;
  tech: string[];
  img?: string;
}

const ProjectCard: React.FC<ProjectProps> = (props: ProjectProps) => {
  const classes = projectCardStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <div className={classes.titleWrapper}>
        <Typography variant='h3' className={classes.title} component='a' href={props.live}>
          {props.title}
        </Typography>
        {props.github && (
          <GitHubIcon
            className={classes.titleIcon}
            onClick={() => {
              window.open(props.github);
            }}
          />
        )}
        {props.live && (
          <OpenInNewIcon
            className={classes.titleIcon}
            onClick={() => {
              window.open(props.live);
            }}
          />
        )}
      </div>

      <Divider className={classes.divider} />
      <ul className={classes.descWrapper}>
        {props.desc.map((e, i) => (
          <li key={i}>
            <Typography variant='body2' className={classes.desc}>
              {e}
            </Typography>
          </li>
        ))}
      </ul>

      <Divider className={classes.divider} />
      {props.tech.map((e, i) => (
        <Typography key={i} display='inline' variant='caption' className={classes.tech}>
          {e}
        </Typography>
      ))}
    </Paper>
  );
};

const ProjectHolder: React.FC = () => {
  return (
    <Container maxWidth='lg'>
      <SubTitle name='Projects' />
      <Grid container spacing={2}>
        {data.project.map((e, i) => (
          <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
            <ProjectCard {...e} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectHolder;

const projectCardStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    border: `2px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.background.default,
  },
  divider: { marginTop: theme.spacing(1), marginBottom: theme.spacing(2) },
  titleWrapper: { display: 'flex', flexWrap: 'wrap', alignItems: 'center' },
  title: { fontWeight: 500 },
  titleIcon: {
    marginLeft: theme.spacing(1),
    marginBottom: 6,
    cursor: 'pointer',
  },
  descWrapper: {
    listStyleType: 'circle !important',
    paddingInlineStart: `${theme.spacing(2)}px !important`,
  },
  desc: {},

  tech: {
    '&:not(:last-child):after': {
      content: '", "',
    },
  },
}));
