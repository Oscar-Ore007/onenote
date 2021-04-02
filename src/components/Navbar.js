import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = makeStyles({
    link: {
        textDecoration: 'none',
        color: 'black',
        fontFamily: 'Cursive',
        fontWeight: 700,
        fontSize: 35
    },
    barColor: {
        backgroundColor: '#8A2BE2'
    },
    button: {
        color: 'black'
    }
})

function Navbar() {
    const classes = styles()

    return (
        <AppBar position="sticky" className={classes.barColor}>
            <Toolbar>
                <Grid container>
                    <Grid item xs={10}>
                        <Typography variant="h4" component={Link} to={"/"} className={classes.link}>One Note</Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Button component={Link} to={"/notebooks/new"} className={classes.button}>New Notebook</Button>
                    </Grid >
                    <Grid item xs={1}>
                        <Button component={Link} to={"/notebooks"} className={classes.button}>Notebooks</Button>
                    </Grid>
    
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar 