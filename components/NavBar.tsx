import React, { useState } from 'react';
//  mui
import {
  Typography,
  AppBar,
  Toolbar,
  Hidden,
  Button,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListSubheader,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
//  icons
import MenuIcon from '@material-ui/icons/Menu';
import DescriptionIcon from '@material-ui/icons/Description';

const naviItem = ['about', 'skill', 'work', 'projects'];
//  scroll to location - height of navbar
const scrollToId = (id: string) => {
  const target = document.getElementById(id);
  const navBar = document.getElementById('nav-bar');

  if (target) {
    const destination = target.offsetTop - (navBar?.offsetHeight || 0);
    window.scroll({ top: destination, behavior: 'smooth' });
  }
};

const NavDrawer: React.FC<any> = ({ handleToggle }) => {
  const classes = drawerStyles();
  return (
    <List className={classes.list}>
      <ListSubheader className={classes.drawerTitle}>
        <Typography variant='h5'>Call me James :)</Typography>
      </ListSubheader>

      <Divider />
      {naviItem.map((e, i) => (
        <ListItem
          button
          key={i}
          onClick={() => {
            scrollToId(e);
            handleToggle(false);
          }}
          className={classes.listItem}
        >
          <ListItemIcon className={classes.listIcon}>
            <DescriptionIcon />
          </ListItemIcon>
          <Typography variant='button'>{e}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

const NavBar: React.FC = () => {
  const classes = useStyles();

  const [openNav, setOpenNav] = useState<boolean>(false);

  const toggleDrawer = () => {
    setOpenNav(!openNav);
  };

  return (
    <AppBar position='fixed' className={classes.appBar} id='nav-bar'>
      <Toolbar>
        <Hidden smUp>
          <MenuIcon onClick={toggleDrawer} />
          <Drawer
            anchor='left'
            open={openNav}
            onClose={toggleDrawer}
            classes={{ paper: classes.drawerWrapper }}
          >
            <NavDrawer handleToggle={setOpenNav} />
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Typography variant='h6' className={classes.title} onClick={() => scrollToId('about')}>
            Jingfu Dong
          </Typography>
          {naviItem.map(e => (
            <Button key={e} color='inherit' onClick={() => scrollToId(e)}>
              {e}
            </Button>
          ))}
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 0,
    },
    appBar: {
      color: theme.palette.text.disabled,
      backgroundColor: theme.palette.text.primary,
    },
    drawerWrapper: {
      backgroundColor: theme.palette.text.primary,
      color: theme.palette.text.disabled,
    },
    title: {
      flexGrow: 1,
      cursor: 'pointer',
    },
  }),
);

const drawerStyles = makeStyles((theme: Theme) => ({
  list: {
    width: 200,
  },
  drawerTitle: {
    color: theme.palette.text.disabled,
    padding: theme.spacing(3),
  },
  listItem: {
    color: theme.palette.text.disabled,
    padding: theme.spacing(2),
  },
  listIcon: {
    color: theme.palette.text.disabled,
  },
}));
