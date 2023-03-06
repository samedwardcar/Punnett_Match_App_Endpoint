import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import  AppBar from '@material-ui/AppBar';
import Toolbar from '@material-ui/Toolbar';
import Typography from '@material-ui/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Link from '@mui/material/Link';



const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});

 export default function Navbar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            My App
          </Typography>
          <ButtonGroup variant="text" aria-aria-label="text button group">
          <Button href= "/Home" color="inherit">Home</Button>
          <Button href= "/Square" color="inherit">Square</Button>
          <Button href= '/Contact' color="inherit">Contact</Button>
          <Button href= '/signin' color="inherit">Sign In</Button>
          <Button href= '/signup' color="inherit">Sign up</Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
}

// export default Navbar;