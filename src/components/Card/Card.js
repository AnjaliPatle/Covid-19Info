import React, { Component } from 'react'
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import styles from './Card.module.css'
import Countup from 'react-countup'
import cx from 'classnames';
export default class Cards extends Component {
    render() {
        if(!this.props.data.confirmed)return<h1>Loading..</h1>
        else
        return (
            <div className={styles.container}>
                <Grid container spacing={3} justify="center">
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.infected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Infected</Typography>
                            <Typography variant="h5">
                                <Countup start={0} end={this.props.data.confirmed.value} duration={2.5} separator=","/>
                            </Typography>
                            <Typography color="textSecondary">{new Date(this.props.data.lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of Active Cases</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5">
                            <Countup start={0} end={this.props.data.recovered.value} duration={2.5} separator=","/>
                            </Typography>
                            <Typography color="textSecondary">{new Date(this.props.data.lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of Recovered Cases</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card,styles.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5">
                            <Countup start={0} end={this.props.data.deaths.value} duration={2.5} separator=","/>
                            </Typography>
                            <Typography color="textSecondary">{new Date(this.props.data.lastUpdate).toDateString()}</Typography>
                            <Typography variant="body2">Number of Deaths</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
