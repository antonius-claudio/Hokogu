import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from '../assets/css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const classes = useStyles();

    return (
        <>
        <AppBar position="static">
            <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Typography variant="h6"  className={classes.title}>
                Hokogu
            </Typography>
            <Button color="inherit"><Link to='/'>Home</Link></Button>
            <Button color="inherit"><Link to='/favorites'>Favorites</Link></Button>
            <Button color="inherit"><Link to='/detail'>Detail</Link></Button>
            <Button color="inherit"><Link to='/register'>Register</Link></Button>
            <Button color="inherit"><Link to='/login'>Login</Link></Button>
            </Toolbar>
        </AppBar>
        </>
    )
}