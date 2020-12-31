import React from 'react';

import { Grid, Card, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CountUp from 'react-countup';

const useStyles = makeStyles((theme) => ({
    box: {
        margin: "10px",

    },
    title: {
        fontSize: '12px'
    },

    count: {
        fontSize: '24px',
        fontWeight: 'bold'
    },

    container:{
        marginTop: '35px'
    }
}));

function InfoBox(props) {

    const classes = useStyles();


    if (Object.keys(props.data).length === 0) {
        return (<h2 color="black">
           
        </h2>
        )
    }

    return (

        <Grid container className={classes.container}>

            {props.data.list.map((obj, i) => (
                    <Grid item xs className={classes.box} key={i}>
                    <Card style={{backgroundColor: obj.color}}>
                        <CardContent>
                            <span className={classes.title}>
                                {obj.title.toUpperCase()}
                            </span>
                            <br/>
                            <span className={classes.count}> <CountUp end={obj.count} /></span>
                        </CardContent>
                    </Card>
                </Grid>
                ))
                
            }

          

        </Grid>




    )
}

export default InfoBox
