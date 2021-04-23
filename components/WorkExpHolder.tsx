import React from 'react';
//  mui
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import { Container, Grid, Paper, Typography, Hidden } from '@material-ui/core';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from '@material-ui/lab';
//  components
import SubTitle from './Title';
//  data
import data from '../assets/data.json';

interface MyTimeLineProps {
  title: string;
  company?: string;
  date: string;
  location?: string;
  desc: string[];
}

const MyTimeLineItem: React.FC<MyTimeLineProps> = (props: MyTimeLineProps) => {
  const classes = timeLineStyles();
  return (
    <TimeLineItemFluid className={classes.root}>
      <Hidden xsDown>
        <TimelineOppositeContent>
          <Typography color='textSecondary' variant='h6'>
            {props.date}
          </Typography>
        </TimelineOppositeContent>
      </Hidden>
      <TimelineSeparator>
        <TimelineDot color='secondary' className={classes.dot} />
        <TimelineConnector className={classes.connector} />
      </TimelineSeparator>
      <TimelineContent className={classes.contentWrapper}>
        <MyPaper elevation={0}>
          <Typography variant='h5' className={classes.title}>
            {props.title}
          </Typography>
          <Typography display='inline' variant='h6' color='textSecondary'>
            {props.company},
          </Typography>

          <Typography display='inline' variant='body2' color='textSecondary'>
            {' '}
            {props.location}
          </Typography>
          <Hidden smUp>
            <Typography variant='body2' color='textSecondary'>
              {props.date}
            </Typography>
          </Hidden>
          <ul className={classes.desc}>
            {props.desc.map((e, i) => (
              <li key={i}>
                <Typography variant='body1'>{e}</Typography>
              </li>
            ))}
          </ul>
        </MyPaper>
      </TimelineContent>
    </TimeLineItemFluid>
  );
};

const WorkExpHolder: React.FC = () => {
  return (
    <Container maxWidth='lg'>
      <SubTitle name='Work Experience' />
      <Grid container>
        <Grid item xs={12} md={12}>
          <Timeline>
            {data.work.map((e, i) => (
              <MyTimeLineItem key={i} {...e} />
            ))}
          </Timeline>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WorkExpHolder;

const timeLineStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px`,
    '@media(max-width:960px)': { padding: `${theme.spacing(2)}px 0` },
  },
  title: { fontWeight: 500 },
  desc: {
    marginTop: '0.5rem !important',
    listStyleType: 'circle !important',
    paddingInlineStart: '1rem !important',
  },
  contentWrapper: { padding: '10px 16px' },
  dot: { padding: '0.5vw' },
  connector: { backgroundColor: theme.palette.divider },
}));

const TimeLineItemFluid = withStyles({
  missingOppositeContent: {
    '&:before': {
      display: 'none',
    },
  },
})(TimelineItem);

const MyPaper = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
    border: `2px solid ${theme.palette.secondary.main}`,
    backgroundColor: theme.palette.background.default,
  },
}))(Paper);
