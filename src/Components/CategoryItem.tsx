import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {CategoryPropType} from "./../Types/Types";
import Mode from './Mode';

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

const CategoryItem = (props : CategoryPropType) => {
    const classes = useStyles();

    return (
            <div>
                <Accordion >
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography className={classes.heading}>Module Name : {props.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails style={{display : "block"}}>
                    <Mode
                    name={props.title}
                    ids={props.id}
                    mode={'easy'}/>
                    <Mode
                    name={props.title}
                    ids={props.id}
                    mode={'medium'}/>
                    <Mode
                    name={props.title}
                    ids={props.id}
                    mode={'hard'}/>
                
                    </AccordionDetails>
                </Accordion>
            </div>
    )
}

export default CategoryItem;