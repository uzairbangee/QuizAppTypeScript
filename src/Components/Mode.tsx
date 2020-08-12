import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import {ModePropType} from "./../Types/Types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(17),
      fontWeight: theme.typography.fontWeightBold,
    },
    button : {
        backgroundColor: 'rgb(19, 168, 158)',
        marginTop : '2%'
    },
    text : {
        width : '98%',
        marginTop : '2%'
    }
  }),
);

const Mode = (props : ModePropType) => {
    const classes = useStyles();

    return (
        <div>
            <Accordion >
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>Quiz Mode : {props.mode}</Typography>
                </AccordionSummary>
                <AccordionDetails style={{display : "block"}}>
                    <Typography className={classes.text}>
                    Description : Quiz for {props.name} which covers {props.name}
                    </Typography>
                    <Typography className={classes.text}>
                        <b>Passing Score :</b> 10
                    </Typography>
                    <Typography className={classes.text}>
                        <b>Quiz Duration :</b> 10 minutes
                    </Typography>

                    <Link to={`/quiz/${props.ids}/${props.mode}`} style={{textDecoration: 'none'}}>
                        <Button variant="contained" className={classes.button}>
                            Start Quiz
                        </Button>
                    </Link>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Mode;