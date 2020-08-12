import React, {useEffect, useState, Fragment} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useParams} from 'react-router-dom';
import {getQuiz} from './../services/services';
import {questionType} from './../Types/Types';
import Loading from './Loading';
import Typography from '@material-ui/core/Typography';
import Quiz from './Quiz';
import Timer from './Timer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        width: '100%',
        marginTop : '3%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        marginBottom: '10%',
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      justifyContent: "space-between"
    },
    passed : {
        color : 'rgb(19, 168, 158)',
    },
    failed : {
        color : 'red',
    },
  }),
);

const QuizPage = () => {
    const classes = useStyles();

    const { category_id, mode } = useParams();
    const [quizess, setQuizess] = useState<questionType[]>([]);
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        setLoading(true);
        const fetch = async () => {
            const result: questionType[] = await getQuiz(category_id, mode);
            setQuizess(result);
            setLoading(false);
            
        };
        fetch();
    }, [])

    const next = (e: React.FormEvent<EventTarget>, answer:string) => {
        e.preventDefault();

        if(answer === quizess[count].correct_answer)
            setScore(score+1)

        if(count < 10)
            setCount(count+1);
    }

    if(loading)
        return <Loading/>;

    if(quizess.length === 0){
        return (
            <div>The page you are lokking for is not Found</div>
        )
    }

    return (
        <Fragment>
            {
                count < 10
                ?
                <div className={classes.root}>
                    <Grid container spacing={3} style={{width: '95%', margin: '0px'}}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                            <Typography >
                                    <Timer/>
                                </Typography>
                                <Typography >
                                    {count + 1} of 10
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Quiz 
                    number={count}
                    question={quizess[count].question}
                    answers={quizess[count].answers}
                    handleNext={next}
                    />
                </div>
                :
                <div className={classes.root}>
                    <Grid container spacing={3} style={{width: '95%', margin: '0px', display: "contents"}}>
                        <Grid item xs={4}>
                            <Paper style={{padding : '20px'}}>
                            <Typography >
                                    <b>Total Questions: </b> 10
                                </Typography>
                                <Typography >
                                    <b>Answered Correct: </b> {score}
                                </Typography>
                                <Typography >
                                    <b>Score: </b> {score}0%
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>

                    <Grid container spacing={3} style={{width: '95%', margin: '0px', display: "contents"}}>
                        <Grid item xs={4}>
                            <Paper style={{padding : '20px'}}>
                                {
                                    score >= 7
                                    ?
                                    <Typography className={classes.passed}>
                                        You have successfully passed the exam.
                                    </Typography>
                                    :
                                    <Typography className={classes.failed}>
                                        Sorry! You have Failed the exam.
                                    </Typography>
                                }
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
                }
        </Fragment>
    )
}

export default QuizPage;