import React, {Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    title: {
          display: 'block',
    },
    head: {
        backgroundColor: 'rgb(51, 51, 51)',
        borderBottom: '3px solid rgb(19, 168, 158)',
    },
}))

const Header = () => {

    const classes = useStyles();

    return (
        <Fragment>
            <AppBar position="static" className={classes.head}>
                <Toolbar>
                    <Link to={`/quiz/${props.ids}/${props.mode}`} style={{textDecoration: 'none'}}>
                        <Typography variant="h6" className={classes.title}>
                        Quiz App
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
        </Fragment>
    )
}

export default Header;