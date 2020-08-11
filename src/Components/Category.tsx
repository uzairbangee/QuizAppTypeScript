import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CategoryItem from "./CategoryItem";
import {data, dataType} from "../data";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        width: '100%',
        marginTop : '5%',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        marginBottom: '10%',
    },
    headingMain: {
      fontSize: theme.typography.pxToRem(20),
      fontWeight: theme.typography.fontWeightBold,
      marginTop : "1%",
      marginBotton : "1%",
    },
  }),
);

const Category = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography className={classes.headingMain}> 
                Welcome to Quiz App
            </Typography>
            <Typography className={classes.headingMain}> 
                Class Name: Just for Fun
            </Typography>
            <div style={{width : '75%'}}>
                {
                    data.map((item: dataType, index: number) => (
                        <CategoryItem 
                        title={item.name}
                            id={item.id}
                            key={index}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Category;