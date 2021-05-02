import React from 'react';
//  mui
import { makeStyles } from '@material-ui/core/styles';

interface MyProps {
  banner?: React.ReactNode;
  skill?: React.ReactNode;
  work?: React.ReactNode;
  project?: React.ReactNode;
}

const Portfolio: React.FC<MyProps> = (props: MyProps) => {
  const classes = useStyles();
  return (
    <main>
      <section id='about' className={classes.banner}>
        {props.banner}
      </section>
      <section id='skill' className={`${classes.root} ` + `${classes.skill}`}>
        {props.skill}
      </section>
      <section id='work' className={classes.root}>
        {props.work}
      </section>
      <section id='projects' className={`${classes.root} ` + `${classes.project}`}>
        {props.project}
      </section>
    </main>
  );
};

export default Portfolio;

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(12),
    '@media(max-width:960px)': {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(6),
    },
  },
  banner: {
    paddingTop: theme.spacing(16),
    paddingBottom: theme.spacing(12),
    '@media(max-width:960px)': {
      paddingTop: theme.spacing(11),
      paddingBottom: theme.spacing(6),
    },
  },
  skill: { backgroundColor: theme.palette.background.paper },
  project: { backgroundColor: theme.palette.background.paper },
}));
