import React from 'react'
import { AppBar, Toolbar, Grid, makeStyles } from '@material-ui/core'




const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#fff',
        
    },
    welcome: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '2.5rem',
        color: '#253053',
        textAlign: "center"

        
    }
}))

export default function Header() {

    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <Grid container
                    alignItems="center">
                    <Grid item>
                    <h1 className={classes.welcome}>Welcome to Soothe Volunteership</h1>
                    <img src='soothe.jpeg'></img>
                       
                    </Grid>
                   
                </Grid>
            </Toolbar>
        </AppBar>
    )
}
