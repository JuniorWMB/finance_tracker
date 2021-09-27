import React from 'react'
import {Card, CardHeader,CardContent,Typography} from '@material-ui/core'
import {Doughnut} from 'react-chartjs-2'

import useStyles from './Details/styles'


const Details = () => {

    const classes = useStyles()


    return (
        <Card className={classes.income}>
            <CardHeader title='income'/>
            <CardContent>
                <Typography variant="h5">£50</Typography>
            <Doughnut data="DATA"/>
            </CardContent>
        </Card>
    )
}

export default Details
