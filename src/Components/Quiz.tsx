import React, {useEffect, useState} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {quizShowPropType} from './../Types/Types';
import Radio from '@material-ui/core/Radio';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(2),
    },
    button : {
        backgroundColor: 'rgb(19, 168, 158)',
        marginTop : '2%',
    },
  }),
);

const Quiz = (props: quizShowPropType) => {
    const classes = useStyles();

    const [selectedValue, setSelectedValue] = useState('');
    const [disabled, setDisabled] = useState(true);

    useEffect(() => {
        setSelectedValue('');
        setDisabled(true);
    }, [props.number])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(e.target.value);
        setDisabled(false);
    };

    return (
        <div style={{display: 'contents'}}>
            <Grid container spacing={3} style={{width: '95%', margin: '0px'}}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography >
                            {props.number + 1}. {props.question}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

            <form style={{display: 'contents'}} onSubmit={(e) => props.handleNext(e, selectedValue)}>
                {
                    props.answers.map((item: string, index: number) => (
                        <Grid container spacing={3} style={{width: '95%', margin: '0px'}} key={index}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <Radio
                                        checked={selectedValue === item}
                                        onChange={handleChange}
                                        value={item}
                                        required={true}
                                        color="default"
                                        name="radio-button-demo"
                                        inputProps={{ 'aria-label': item }}
                                        size="small"
                                    /> 
                                    <Typography style={{display: 'inline-block'}}>
                                        {item}
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    ))
                }

                {

                }
                <Button type="submit" variant="contained" disabled={disabled} className={classes.button}>
                            Next
                </Button>
            </form>
        
        </div>
    )
}

export default Quiz;